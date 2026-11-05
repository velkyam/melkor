'use client'
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { GetStarted } from "@/components/get-started";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Image } from "@nextui-org/image";
import { ReferenceMap } from "@/components/reference-map";
import { references } from "@/config/references";

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
				<ReferenceMap />
				<div className="flex flex-col md:grid grid-rows-1 grid-cols-3 gap-12">
					{references.map((r) => (
					<motion.div
							key={r.title}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}>
					<Card isBlurred className="py-10 px-4 lg:px-6 dark:border dark:border-slate-700 h-full">
						<CardHeader className="flex">
							<h4 className="font-semibold text-large text-left">{r.title}</h4>
						</CardHeader>
						<CardBody>
							<p>{r.description}</p>
						</CardBody>
						{r.logo && (
						<motion.div initial={{ opacity: 0, scale: 0.75 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className=" w-24">
						<Image removeWrapper alt={r.logo.alt} src={r.logo.src}></Image>
					</motion.div>
						)}
					</Card>
					</motion.div>
					))}
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
