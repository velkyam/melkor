'use client'
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { GetStarted } from "@/components/get-started";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Image } from "@nextui-org/image";

export default function ReferencePage() {

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
			{/* Our successes */}
			<div className=" md:bg-none bg-right bg-cover bg-melkor-pattern">
			<div className="flex flex-col w-full max-w-7xl items-center py-20 md:pb-32 border-b border-slate-200 dark:border-slate-700 px-6">
				<div className={title({ class: "mb-20", size: "lg" })}>Reference</div>
				<div className="flex flex-col md:grid grid-rows-1 grid-cols-3 gap-12">
				<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}>
					<Card isBlurred className="py-10 px-4 lg:px-6 dark:border dark:border-slate-700 h-full">
				
				

						<CardHeader className="flex">
							<h4 className="font-semibold text-large text-left">Energetický dispečink Dopravní společnosti Zlín a Otrokovice</h4>
						</CardHeader>
						<CardBody>
							<p>Na naší technologii běží dispečink, který má na starosti napájení trolejbusů v celém Zlíně a Otrokovicích. Zajišťujeme nepřetržitý provoz deseti měníren a jejich místní i dálkové řízení, které jsme dodali v rámci dvou zakázek ve spolupráci s firmou OHLA ŽS.</p>
						</CardBody>
					
						<motion.div initial={{ opacity: 0, scale: 0.75 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className=" w-24">
						<Image removeWrapper alt="OHLA_LOGO" src="/OHLA_LOGO.png"></Image>
					</motion.div>

					</Card>
					</motion.div>
					<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}>
					<Card isBlurred className=" py-10 px-4 lg:px-6 dark:border dark:border-slate-700 h-full">
						<CardHeader className="flex">
							<h4 className="font-semibold text-large text-left">Místní řízení měnírny Heršpice a transformátorové stanice Slatina		</h4>			</CardHeader>
						<CardBody>
						<p>Pro Dopravní podnik města Brna jsme dodali modernizovaný řídicí systém, který ovládá stávající technologii. Abychom zajistili plynulé pokračování obsluhy, celý systém byl navržen tak, aby (krom použití moderní techniky) přesně odpovídal řízení předešlému.</p>
						</CardBody>
					</Card>
					</motion.div>
					<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}>
					<Card isBlurred className=" py-10 px-4 lg:px-6 dark:border dark:border-slate-700 h-full">
						<CardHeader className="flex">
							<h4 className="font-semibold text-large text-left">Dálkové řízení vytápění Orlovny Brno-Obřany	</h4>				</CardHeader>
						<CardBody>
							<p>
								Pro jednotu Orla Brno-Obřany jsme rozšířili existující řízení kotelny o soustavu bezdrátových snímačů teploty a webové rozhraní, které umožňuje sledování teploty, vzdálené ovládání kotlů i plánování automatického vytápění.</p>
						</CardBody>
					</Card>
					</motion.div>
				</div>
				</div>
			</div>
			{/* Get started */}
			<div className="px-6">

			<GetStarted/>
			</div>
		</motion.div>
		</ReactLenis>
	);
}
