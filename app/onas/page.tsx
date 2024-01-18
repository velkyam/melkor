'use client'
import { title } from "@/components/primitives";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar } from "@nextui-org/react";
import { motion } from "framer-motion"
import { useEffect } from "react";
export default function AboutPage() {
	useEffect(() => {
		window.scrollTo(0, 1);
	  }, []);
	return (
<motion.div initial={{ opacity: 0}}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 0.5 }}>
		<div className="inline-block max-w-7xl justify-center py-20 ">
			<h1 className={title()}>O nás</h1>
			<div className="flex w-full my-20">
				{/* 	<Card className="px-6 py-10 dark:border dark:border-slate-700">
			
					<CardBody>
						<p className="text-left">Melkor Software je moderní IT firma, která Vám nabízí komplexní softwarová řešení na klíč. Naše softwarové řešení jsou postavená na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž jsou stabilní, bezpečná a uživatelsky přívětivá. Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do jakéhokoli existujícího provozu. Společně tvoříme tým s širokou paletou dovedností v oblastech elektrotechniky, programování a řízení komplexních projektů, díky čemuž jsme schopni našim klientům dodávat řešení flexibilně a efektivně.</p>
						
						</CardBody>
					</Card> */}
				<p className="text-left">Melkor Software je moderní IT firma, která Vám nabízí komplexní softwarová řešení na klíč. Naše softwarové řešení jsou postavená na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž jsou stabilní, bezpečná a uživatelsky přívětivá. Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do jakéhokoli existujícího provozu. Společně tvoříme tým s širokou paletou dovedností v oblastech elektrotechniky, programování a řízení komplexních projektů, díky čemuž jsme schopni našim klientům dodávat řešení flexibilně a efektivně.</p>

			</div>

			<div className={title()}>Náš tým</div>
	

				<div className="flex flex-col md:grid grid-cols-2 gap-12 mt-20">
				<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}>
				<Card className=" py-4 lg:py-6 px-4 lg:px-6">
					<CardHeader className="flex flex-col md:flex-row gap-6">
						<Avatar isBordered radius="full" className="w-24 h-24 text-large" src="/premek.webp" />
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<p className="text-xl">Ing. Bc. et Bc. Přemysl Till</p>
							<p className="text-default-500">jednatel, senior programátor</p>
							<Link
								isExternal
								href="mailto:ptill@melkor.cz">
								ptill@melkor.cz
							</Link>
						</div>
					</CardHeader>
					<CardBody>
						<p>Absolvent Fakulty informatiky Masarykovy Univerzity a Fakulty elektrotechniky a komunikačních technologií VUT, vede tým programátorů, kombinuje zkušenosti a znalosti programování a elektrotechniky.</p>
					</CardBody>
				</Card>
				</motion.div>
				<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}>
				<Card className="py-4 lg:py-6 px-4 lg:px-6">
					<CardHeader className="flex flex-col md:flex-row gap-6">
						<Avatar isBordered radius="full" className="w-24 h-24 text-large" src="/robert.webp" />
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<p className="text-xl">JUDr. Robert Kerndl</p>
							<p className="text-default-500">jednatel, právník</p>
							<Link
								isExternal
								href="mailto:rkerndl@melkor.cz">
								rkerndl@melkor.cz
							</Link>
						</div>
					</CardHeader>
					<CardBody>
						<p>Absolvent Právnické fakulty Univerzity Karlovy, odpovídá za právní, finanční a daňové záležitosti společnosti, právník se zkušenostmi z advokacie a mezinárodní investiční skupiny se specializací na obchodní, finanční a akviziční právo.</p>
					</CardBody>
				</Card>
				</motion.div>
			</div>

			<div className="flex flex-col md:grid grid-cols-2 gap-12 my-12">
			<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}>
				<Card className="py-4 lg:py-6 px-4 lg:px-6">
					<CardHeader className="flex flex-col md:flex-row gap-6">
						<Avatar isBordered radius="full" className="w-24 h-24 text-large" src="/dan3.webp" />
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<p className="text-xl">Mgr. Dan Makalouš</p>
							<p className="text-default-500">programátor, vizualizace a desktopové systémy</p>
							<Link
								isExternal
								href="mailto:dmakalous@melkor.cz">
								dmakalous@melkor.cz
							</Link>
						</div>
					</CardHeader>

				</Card>
				</motion.div>
				<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}>
				<Card className="py-4 lg:py-6 px-4 lg:px-6">
					<CardHeader className="flex flex-col md:flex-row gap-6">
						<Avatar isBordered radius="full" className="w-24 h-24 text-large" src="/dalik.webp" />
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<p className="text-xl">Dalibor Till</p>
							<p className="text-default-500">programátor, komunikace a vestavné systémy</p>
							<Link
								isExternal
								href="mailto:dtill@melkor.cz">
								dtill@melkor.cz
							</Link>
						</div>
					</CardHeader>

				</Card>

				</motion.div>



			</div>
	
		</div >
		</motion.div>

	);
}
