'use client'
import { title } from "@/components/primitives";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar } from "@nextui-org/react";
import { motion } from "framer-motion"
import { useEffect } from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const partners = [
	{
		name: "OHLA ŽS, a.s.",
		url: "https://ohla-zs.cz/",
		logo: "/OHLA_LOGO.png",
		description: "Přední česká stavební společnost s téměř sedmdesátiletou tradicí, od roku 2003 součást španělské skupiny OHLA. Zaměřuje se na výstavbu železnic, silnic, pozemních, vodohospodářských, technologických a energetických staveb.",
	},
	{
		name: "Ortica Software s.r.o.",
		url: "https://www.ortica.cz/",
		logo: "",
		description: "Softwarová firma z Kopřivnice vyvíjející IT systémy na zakázku, od průmyslových aplikací přes systémy pro informování v reálném čase až po weby a automatizace. Podílí se s námi na vývoji systému MelkorVisum.",
	},
];

export default function AboutPage() {

	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	  })
	  useEffect(() => {
		window.scrollTo(0, 1);
	  }, []);

	return (
		<ReactLenis root>
<motion.div initial={{ opacity: 0}}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 0.5 }}>
		<div className="inline-block max-w-7xl justify-center py-20 ">
			<h1 className={title()}>O nás</h1>
			<div className="flex w-full my-20">
				<p className="text-left">Melkor Software je moderní IT firma, která Vám nabízí komplexní softwarová řešení na klíč. Naše softwarové řešení jsou postavená na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž jsou stabilní, bezpečná a uživatelsky přívětivá. Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do jakéhokoli existujícího provozu. Společně tvoříme tým s širokou paletou dovedností v oblastech elektrotechniky, programování a řízení komplexních projektů, díky čemuž jsme schopni našim klientům dodávat řešení flexibilně a efektivně.</p>

			</div>

			<div className={title()}>Náš tým</div>


				<div className="flex flex-col md:grid grid-cols-2 gap-12 mt-20">
				<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}>
				<Card className=" py-4 lg:py-6 px-4 lg:px-6 h-full">
					<CardHeader className="flex flex-col md:flex-row gap-6">
						<Avatar isBordered radius="full" className="w-24 h-24 text-large" src="/premek.webp" />
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<p className="text-xl">Ing. Mgr. Bc. Přemysl Till</p>
							<p className="text-default-500">jednatel, vedoucí softwarového vývoje</p>
							<Link
								isExternal
								href="mailto:ptill@melkor.cz">
								ptill@melkor.cz
							</Link>
						</div>
					</CardHeader>
					<CardBody>
						<p>Absolvent Fakulty informatiky MU a Fakulty elektrotechniky a komunikačních technologií VUT. Kombinuje znalosti ze studií informatiky a elektrotechniky s více než deseti lety zkušeností s vývojem průmyslových softwarových systémů při vedení našeho programátorského týmu.</p>
					</CardBody>
				</Card>
				</motion.div>
				<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}>
				<Card className="py-4 lg:py-6 px-4 lg:px-6 h-full">
					<CardHeader className="flex flex-col md:flex-row gap-6">
						<Avatar isBordered radius="full" className="w-24 h-24 text-large" src="/robert.webp" />
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<p className="text-xl">JUDr. Bc. Robert Kerndl</p>
							<p className="text-default-500">jednatel, obchodní a smluvní agenda</p>
							<Link
								isExternal
								href="mailto:rkerndl@melkor.cz">
								rkerndl@melkor.cz
							</Link>
						</div>
					</CardHeader>
					<CardBody>
						<p>Absolvent Právnické fakulty a Filozofické fakulty UK. Zkušenosti získal při správě soukromého kapitálu mezinárodní investiční skupiny. Ve společnosti odpovídá za právní, finanční a daňové záležitosti, včetně smluvní a licenční agendy projektů.</p>
					</CardBody>
				</Card>
				</motion.div>
			</div>

			<div className={title({ class: "block mt-32" })}>Naši partneři</div>

			<div className="flex flex-col gap-8 mt-20">
				{partners.map((p) => (
				<motion.div
							key={p.name}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}>
				<Card className="py-4 lg:py-6 px-4 lg:px-6">
					<CardBody className="flex flex-col md:flex-row md:items-center gap-6">
						{p.logo && (
						<div className="w-32 shrink-0 self-center">
							<Image removeWrapper alt={p.name} src={p.logo} />
						</div>
						)}
						<div className="flex flex-col gap-2 text-left">
							<p className="text-xl">{p.name}</p>
							<p>{p.description}</p>
							<Link isExternal showAnchorIcon href={p.url}>
								{p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
							</Link>
						</div>
					</CardBody>
				</Card>
				</motion.div>
				))}
			</div>

		</div >
		</motion.div>
		</ReactLenis>

	);
}
