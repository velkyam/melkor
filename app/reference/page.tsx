'use client'
import { title } from "@/components/primitives";
import { GetStarted } from "@/components/get-started";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { ReferenceMap } from "@/components/reference-map";
import { ReferenceCards } from "@/components/reference-cards";

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
				<ReferenceCards />
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
