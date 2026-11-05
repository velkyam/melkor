'use client'
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { motion } from "framer-motion";
import { RefLogo } from "@/components/ref-logo";
import { references } from "@/config/references";

/**
 * Karty referencí – používá je hlavní stránka i stránka /reference,
 * aby obě vypadaly stejně. Data jsou v config/references.ts.
 */
export const ReferenceCards = ({ headingTag: Heading = "h4" }: { headingTag?: "h2" | "h3" | "h4" }) => (
	<div className="flex flex-col md:grid grid-rows-1 grid-cols-3 gap-12">
		{references.map((r) => (
			<motion.div
				key={r.title}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<Card isBlurred className="relative py-10 px-4 lg:px-6 dark:border dark:border-slate-700 h-full">
					{r.client && (
						<div className="absolute top-4 right-4 lg:right-6 z-10">
							<RefLogo logo={r.client} />
						</div>
					)}
					<CardHeader className={"flex" + (r.client ? " pt-8" : "")}>
						<Heading className="font-semibold text-large text-left">{r.title}</Heading>
					</CardHeader>
					<CardBody>
						<p>{r.description}</p>
					</CardBody>
					{r.partners && r.partners.length > 0 && (
						<motion.div
							initial={{ opacity: 0, scale: 0.75 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
							className="w-full flex items-center justify-evenly pt-4"
						>
							{r.partners.map((p) => (
								<RefLogo key={p.src} logo={p} area={8500} maxHeight={96} />
							))}
						</motion.div>
					)}
				</Card>
			</motion.div>
		))}
	</div>
);
