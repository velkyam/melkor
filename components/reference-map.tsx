'use client'
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { references, Reference } from "@/config/references";
import { MAP_WIDTH, MAP_HEIGHT, project, regions, countryOutlines } from "@/config/map-data";

type Location = {
	city: string;
	x: number; // % šířky mapy
	y: number; // % výšky mapy
	region: string;
	items: Reference[];
};

/** Spojí zakázky ze stejného města do jednoho bodu. */
function groupByCity(refs: Reference[]): Location[] {
	const map = new Map<string, Location>();
	for (const r of refs) {
		const existing = map.get(r.city);
		if (existing) {
			existing.items.push(r);
			continue;
		}
		const [px, py] = project(r.lat, r.lon);
		map.set(r.city, {
			city: r.city,
			x: (px / MAP_WIDTH) * 100,
			y: (py / MAP_HEIGHT) * 100,
			region: r.region,
			items: [r],
		});
	}
	return Array.from(map.values());
}

function PopupContent({ loc }: { loc: Location }) {
	return (
		<>
			<div className="flex items-center gap-2 mb-3">
				<span className="w-2.5 h-2.5 rounded-full bg-melkorPurple dark:bg-cl3 shrink-0" />
				<span className="text-xs font-semibold uppercase tracking-wider text-melkorPurple dark:text-[#a5a7f0]">
					{loc.city}
				</span>
			</div>
			<div className="space-y-4">
				{loc.items.map((r) => (
					<div key={r.title}>
						<h4 className="font-semibold text-base leading-snug mb-1.5">{r.title}</h4>
						<p className="text-sm leading-relaxed text-default-600">{r.description}</p>
					</div>
				))}
			</div>
		</>
	);
}

export const ReferenceMap = () => {
	const locations = useMemo(() => groupByCity(references), []);
	const activeRegions = useMemo(() => new Set(locations.map((l) => l.region)), [locations]);
	const [active, setActive] = useState<string | null>(null);
	const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const open = (city: string) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setActive(city);
	};
	const scheduleClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => setActive(null), 150);
	};

	// Zavření klávesou Esc nebo kliknutím mimo mapu (dotyková zařízení)
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
		const onDown = (e: PointerEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setActive(null);
		};
		window.addEventListener("keydown", onKey);
		window.addEventListener("pointerdown", onDown);
		return () => {
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("pointerdown", onDown);
		};
	}, []);

	const activeLoc = locations.find((l) => l.city === active) ?? null;
	const highlightRegion = activeLoc?.region;

	return (
		<div ref={wrapperRef} className="w-full max-w-5xl mx-auto mb-20 text-left">
			<div className="relative w-full" style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}>
				<svg
					viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
					className="absolute inset-0 w-full h-full"
					role="img"
					aria-label="Mapa realizovaných zakázek v České republice a na Slovensku"
				>
					{regions.map((r) => {
						const hasRef = activeRegions.has(r.id);
						const isHighlighted = r.id === highlightRegion;
						return (
							<path
								key={r.id}
								d={r.d}
								className={
									"stroke-white dark:stroke-slate-900 transition-colors duration-300 " +
									(isHighlighted
										? "fill-[#c9cbf2] dark:fill-[#3a3d7a]"
										: hasRef
										? "fill-[#e4e5f8] dark:fill-[#272a52]"
										: "fill-slate-200 dark:fill-slate-800")
								}
								strokeWidth={1.5}
								strokeLinejoin="round"
							>
								<title>{r.name}</title>
							</path>
						);
					})}
					{(Object.keys(countryOutlines) as ("CZ" | "SK")[]).map((c) => (
						<path
							key={c}
							d={countryOutlines[c]}
							fill="none"
							className="stroke-slate-400 dark:stroke-slate-500 pointer-events-none"
							strokeWidth={2}
							strokeLinejoin="round"
						/>
					))}
				</svg>

				{/* Body zakázek */}
				{locations.map((loc) => {
					const isActive = active === loc.city;
					return (
						<button
							key={loc.city}
							type="button"
							aria-label={`${loc.city}: ${loc.items.map((i) => i.title).join("; ")}`}
							aria-expanded={isActive}
							className="absolute -translate-x-1/2 -translate-y-1/2 z-10 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-melkorPurple"
							style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
							onMouseEnter={() => open(loc.city)}
							onMouseLeave={scheduleClose}
							onFocus={() => open(loc.city)}
							onBlur={scheduleClose}
							onClick={() => (isActive ? setActive(null) : open(loc.city))}
						>
							<span className="relative flex w-4 h-4 md:w-5 md:h-5">
								<span className="absolute inline-flex h-full w-full rounded-full bg-melkorPurple dark:bg-cl3 opacity-60 animate-ping" />
								<span
									className={
										"relative inline-flex w-full h-full rounded-full bg-melkorPurple dark:bg-cl3 border-2 border-white dark:border-slate-900 shadow-md transition-transform duration-200 " +
										(isActive ? "scale-125" : "")
									}
								/>
							</span>
						</button>
					);
				})}

				{/* Pop-up (tablet a desktop) */}
				{activeLoc && (
					<div
						// Pop-up se otevírá pod bodem (body leží v jednom pásu, takže nezakrývá sousední body),
						// vodorovně je vycentrovaný na bod a nepřesahuje okraje mapy.
						className="hidden md:block absolute z-20 w-[22rem] pt-4"
						style={{
							top: `calc(${activeLoc.y}% + 6px)`,
							left: `clamp(0px, calc(${activeLoc.x}% - 11rem), calc(100% - 22rem))`,
						}}
						onMouseEnter={() => open(activeLoc.city)}
						onMouseLeave={scheduleClose}
					>
						<motion.div
							key={activeLoc.city}
							initial={{ opacity: 0, y: -6 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.15 }}
							data-lenis-prevent
							className="max-h-[26rem] overflow-y-auto rounded-2xl p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-slate-200 dark:border-slate-700 shadow-xl"
						>
							<PopupContent loc={activeLoc} />
						</motion.div>
					</div>
				)}
			</div>

			{/* Detail pod mapou (mobil) */}
			<AnimatePresence mode="wait">
				{activeLoc ? (
					<motion.div
						key={activeLoc.city}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.15 }}
						className="md:hidden mt-6 rounded-2xl p-5 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 shadow-md"
					>
						<PopupContent loc={activeLoc} />
					</motion.div>
				) : (
					<p key="hint" className="md:hidden mt-4 text-center text-sm text-default-500">
						Klepněte na bod pro detail zakázky
					</p>
				)}
			</AnimatePresence>
			<p className="hidden md:block mt-4 text-center text-sm text-default-500">
				Najeďte myší na bod pro detail zakázky
			</p>
		</div>
	);
};
