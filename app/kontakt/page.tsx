'use client'
import { title } from "@/components/primitives";
import ContactForm from "../../components/contact-form";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {Link} from "@nextui-org/link"


export default function BlogPage() {
	return (
		<div className="flex justify-center w-full bg-center bg-cover bg-no-repeat bg-contact-pattern">
		<div className="flex flex-col max-w-7xl items-center justify-center px-6">
	
			<h1 className={title()}>Kontaktujte nás</h1>
			<div className="flex flex-col md:grid grid-rows-1 grid-cols-2 gap-12 my-20">
			<ContactForm />
			<Card isBlurred className="px-6 py-10 dark:border dark:border-slate-700">
					<CardHeader>
					<h2 className="text-3xl">Melkor Software, s.r.o.</h2>
					</CardHeader>
					<CardBody>
						<div className="flex-col">
							<div className="flex mb-2 space-x-4">
								<h4 className="font-semibold">Email:</h4>
								<Link isExternal href="mailto:info@melkor.cz">
									info@melkor.cz
								</Link>
							</div>
							<div className="flex mb-2 space-x-4">
								<h4 className="font-semibold">Sídlo:</h4>
								<p>Hlaváčova 618/28, 614 00 Brno</p>
							</div>
							<div className="flex mb-2 space-x-4">
								<h4 className="font-semibold">Datová schránka:</h4>
								<p>s7zhync</p>
							</div>
							<div className="flex mb-2 space-x-4">
								<h4 className="font-semibold">IČO:</h4>
								<div className="flex-col">

									<p>173 12 914</p>
									<p>vedená u Krajského soudu v Brně, zn. C 129441</p>
									<Link isExternal href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1163732&typ=PLATNY">
										Veřejný rejstřík
									</Link>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
		</div>
		</div>
		</div>
	);
}
