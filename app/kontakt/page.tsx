'use client'
import { title } from "@/components/primitives";
import ContactForm from "../../components/contact-form";
import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link"


export default function BlogPage() {
	return (
		<div className="flex justify-center w-full bg-center bg-cover bg-no-repeat bg-contact-pattern">
			<div className="w-full flex flex-col max-w-7xl items-center justify-center px-6">

				<h1 className={title()}>Kontaktujte nás</h1>
				<div className="flex flex-col lg:grid grid-rows-1 grid-cols-2 gap-12 mt-20 lg:my-20">
				<ContactForm />
					<div className="w-full flex flex-col items-center">

						<Card isBlurred className="w-full lg:max-w-lg flex dark:border dark:border-slate-700 px-6 py-10  ">
						<h2 className="text-2xl font-bold mb-6"> Firemní informace</h2>
						<div className="grid auto-rows-max grid-col-1 lg:grid-cols-12 gap-y-2">

								<h4 className="font-semibold col-span-4">Obchodní firma:</h4>
								<p className="col-span-8">Melkor Software, s.r.o.</p>
								<h4 className="font-semibold col-span-4">Emailová adresa:</h4>
								<Link className="flex items-start col-span-8"isExternal href="mailto:info@melkor.cz">
											info@melkor.cz
										</Link>
								<h4 className="font-semibold col-span-4">Sídlo:</h4>
										<p className="col-span-8">Hlaváčova 618/28, 614 00 Brno</p>
								<h4 className="font-semibold col-span-4">Datová schránka:</h4>
										<p className="col-span-8">s7zhync</p>
								<h4 className="font-semibold col-span-4">Identifikační číslo:</h4>
								
										<div className="col-span-8">
										<p>173 12 914</p>
											<p>vedená u Krajského soudu v Brně, zn. C 129441</p>
											<Link isExternal href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1163732&typ=PLATNY">
												Veřejný rejstřík
											</Link>
											
						
								</div>
								</div>
						</Card>
					
							
					</div>
					
				</div>
			</div>
		</div>
	);
}
