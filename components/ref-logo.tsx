'use client'
import { useEffect, useRef, useState } from "react";
import type { Logo } from "@/config/references";

/**
 * Logo zadavatele/partnera.
 * - Velikost se řídí plochou (`area` v px²), takže široká i vysoká loga působí opticky stejně velká.
 * - V tmavém režimu je logo na bílém podkladu, aby byla čitelná i tmavá loga.
 * - Pokud soubor s logem chybí, nic se nezobrazí (žádný rozbitý obrázek).
 */
export const RefLogo = ({
	logo,
	area = 4000,
	maxWidth = 160,
	maxHeight = 48,
	className = "",
}: {
	logo: Logo;
	area?: number;
	maxWidth?: number;
	maxHeight?: number;
	className?: string;
}) => {
	const [failed, setFailed] = useState(false);
	const [size, setSize] = useState<{ w: number; h: number } | null>(null);
	const ref = useRef<HTMLImageElement>(null);

	const measure = (img: HTMLImageElement) => {
		if (!img.naturalWidth || !img.naturalHeight) return;
		const aspect = img.naturalWidth / img.naturalHeight;
		let w = Math.sqrt(area * aspect);
		let h = w / aspect;
		if (w > maxWidth) { w = maxWidth; h = w / aspect; }
		if (h > maxHeight) { h = maxHeight; w = h * aspect; }
		setSize({ w: Math.round(w), h: Math.round(h) });
	};

	// Obrázek se mohl načíst (nebo selhat) ještě před hydratací Reactu.
	useEffect(() => {
		const img = ref.current;
		if (!img || !img.complete) return;
		if (img.naturalWidth === 0) setFailed(true);
		else measure(img);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (failed) return null;
	return (
		<span className={"inline-flex items-center justify-center dark:bg-white dark:rounded-lg dark:px-2 dark:py-1.5 " + className}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				ref={ref}
				src={logo.src}
				alt={logo.alt}
				title={logo.alt}
				onLoad={(e) => measure(e.currentTarget)}
				onError={() => setFailed(true)}
				className="object-contain max-w-none"
				style={size ? { width: size.w, height: size.h } : { height: Math.round(Math.sqrt(area / 3)), visibility: "hidden" }}
			/>
		</span>
	);
};
