import { title } from "@/components/primitives";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar } from "@nextui-org/react";
export default function AboutPage() {
	return (

		<div className="inline-block max-w-7xl justify-center py-20 ">
			<h1 className={title()}>O nás</h1>
			<div className="flex w-full my-20">
				<Card isBlurred className="px-6 py-10 dark:border dark:border-slate-700">
					<CardHeader className="flex justify-center">
						<h1 className="text-xl text-center font-semibold">Melkor Software</h1>

					</CardHeader>
					<CardBody>
						<p className="text-left">Melkor Software je moderní IT firma, která Vám nabízí komplexní softwarová řešení na klíč. Naše softwarové řešení je postavené na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž je stabilní, bezpečné a uživatelsky přívětivé. Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do existujících provozů. Jsme vášnivý tým profesionálů s rozsáhlým spektrem dovedností od obchodních znalostí po technickou vynalézavost. Společně jsme vytvořili silnou, oddanou a kreativní pracovní atmosféru, která nám umožňuje neustále inovovat a přinášet našim klientům efektivní řešení.</p>
						
					</CardBody>
				</Card>
				
			</div>


			<div className={title()}>Náš tým</div>
			<div className="flex flex-col md:grid grid-rows-1 grid-cols-2 gap-12 lg:my-20 mt-20">

				<Card isBlurred className=" py-6 px-6 dark:border dark:border-slate-700">
					<CardHeader className="flex flex-col md:flex-row gap-6">
						<Avatar isBordered radius="full" className="w-24 h-24 text-large" src="/premek.webp" />
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<p className="text-xl">Ing. Bc. et Bc. Přemysl Till</p>
							<p className="text-default-500">jednatel, senior developer</p>
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

				<Card isBlurred className="py-6 px-6 dark:border dark:border-slate-700">
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
						<p>Absolvent Právnické fakulty Univerzity Karlovy, právník se specializací na obchodní akviziční právo a právo veřejných zakázek.</p>
					</CardBody>
				</Card>
			</div>




		</div>

	);
}
