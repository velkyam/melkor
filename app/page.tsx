'use client'
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Typewriter from 'typewriter-effect';
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import { ScaleW, SecureW, PerformanceW, TestW, LicenceW, SupportW } from "@/components/icons";
import { GetStarted } from "@/components/get-started";
import { motion } from "framer-motion"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react';


export default function Home() {


	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	  })
	  useEffect(() => {
		window.scrollTo(0, 1);
	  }, []);

	return (
		<ReactLenis root>
		<motion.div initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<section className="flex flex-col items-center justify-center ">
				{/* hero row div */}
				<div className="flex justify-center bg-center bg-cover bg-no-repeat bg-hero-pattern2 lg:bg-hero-pattern dark:border-b border-slate-700 shadow-sm w-full pt-6 md:pt-16  "  >


					<div
						className="flex flex-col-reverse justify-between w-full max-w-7xl  md:flex-row pb-24 px-6"  >
						<div
							className="inline-block max-w-md space-y-10">



							<div className={title({ size: "lg" })}>
								<div className="py-2 ">
									Moderní řešení pro
								</div>
								<Typewriter
									options={{
										strings: ['průmyslové', 'energetické', 'dopravní', 'obchodní'],
										autoStart: true,
										loop: true,
										wrapperClassName: title({ color: "purple" }),
									}}
								/>
								<div className="py-2">

									systémy.
								</div>


							</div>
							<div className=" rounded-lg">

								<h2 className={subtitle({ class: "mt-4  w-full" })}>
									Nabízíme komplexní softwarová řešení na
									klíč. Prostřednictvím našich špičkových SCADA systémů Vám můžeme usnadnit řízení
									provozu a zvýšit jeho efektivitu.
								</h2>
							</div>

							<Button color="primary" className="bg-melkorPurple" as={Link} href={siteConfig.links.melkorvisum} radius="full" size="lg" >
								Více o našem řešení
							</Button>
						</div>
						<div className="max-w-2xl h-fit shadow-xl mb-10">
							<video autoPlay loop muted playsInline poster="/poster.webp">
								<source src="/Untitled.webm" type="video/webm" />
								<source src="/Untitled.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>


					</div>
				</div>


				<div className="container flex flex-col items-center  w-full max-w-7xl px-6 ">
					<div className="container flex flex-col items-center  w-full pt-20 md:pt-32">
					<motion.div initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="flex flex-col items-center">
							<h1 className={title({ class: "mb-10", size: "lg" })}>MelkorVisum</h1>
							<h2 className={subtitle({ class: "mb-20 w-full md:text-center max-w-5xl" })}>Naším hlavním produktem je plně přizpůsobitelná a integrovaná SCADA platforma MelkorVisum, která nám umožňuje efektivně vyvíjet vysoce spolehlivé vizualizační a řídicí systémy pro průmyslové, energetické či dopravní provozy.</h2>
						</motion.div>
						{/* card row */}
						<div
							className="flex flex-col w-full max-w-7xl space-y-4  md:space-y-0 md:grid grid-rows-3 md:grid-rows-1 grid-cols-3 gap-10">
								<motion.div initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}>
							<Card className="h-full">
								<Image
									removeWrapper
									alt="Software_engineer_working"
									className="z-0 w-full h-fit max-h-52 object-cover"
									src="/nerd.webp"
									radius="none"
								/>
								<CardBody className="flex flex-col pt-10 space-y-6 items-start items-center">
									<h2 className="font-bold text-large text-center">Kompletní softwarová<br />řešení na klíč</h2>
									<p className="mx-4">Zatímco naši konkurenti licencují SCADA platformy třetích stran, náš program MelkorVisum jsme vyvinuli celý od základů. Díky tomu můžeme snadno a rychle přizpůsobit všechny části systému na míru konkrétním požadavkům.</p>
								</CardBody>
								<CardFooter className="flex justify-center pb-10">
									<Link href="/melkorvisum">
										Více o MelkorVisu
									</Link>
								</CardFooter>
							</Card>
							</motion.div>
							<motion.div initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}>
							<Card className=" h-full">
								<Image
									removeWrapper
									alt="Electrical_engineer_using_MelkorVisum_interface"
									className="z-0 w-full h-fit max-h-52 object-cover"
									src="/vzhled2.webp"
									radius="none"
								/>
								<CardBody className="flex flex-col pt-10 space-y-6 items-start  items-center">
									<h2 className="font-bold text-large text-center">Moderní vzhled <br />přizpůsobený na míru</h2>
									<p className="mx-4">Naše vizualizace je postavená na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž je stabilní, bezpečná a uživatelsky přívětivá.</p>
								</CardBody>
								<CardFooter className="flex justify-center pb-10">
									<Link href="/melkorvisum">
										Více o MelkorVisu
									</Link>
								</CardFooter>
							</Card>
							</motion.div>
							<motion.div initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}>
							<Card className="h-full">
								<Image
									removeWrapper
									alt="Electrical_engineers_installing_plc"
									className="z-0 w-full h-fit max-h-52 object-cover"
									src="/plc.webp"
									radius="none"
								/>
								<CardBody className="flex flex-col pt-10 space-y-6 items-start  items-center">
									<h2 className="font-bold text-large text-center">Integrace se <br />stávajícími technologiemi</h2>
									<p className="mx-4">Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do existujících provozů.</p>
								</CardBody>
								<CardFooter className="flex justify-center pb-10">
									<Link href="/melkorvisum">
										Více o MelkorVisu
									</Link>
								</CardFooter>
							</Card>

							</motion.div>

						</div>

					</div>
					{/* One Platform row */}

					<div className="flex flex-col md:flex-row w-full justify-between max-w-7xl  py-20 md:py-32  border-b border-slate-200 dark:border-slate-700">
					<motion.div initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}>
						<div className="flex-col space-y-10 max-w-lg">

							<div className={title({ size: "lg" })}>
								<div className="py-2">
									Jedna platforma,
								</div>
								<div className="py-2">
									tisíce možností.
								</div>
							</div>
							<h2 className={subtitle({})}>
								Ať už potřebujete moderní energetický dispečink, automatizaci výrobní linky či přehled nad spotřebou energií ve Vaší firmě nebo areálu, Melkor Software Vám poskytne spolehlivé řešení s maximální flexibilitou.
							</h2>
							<Link href="/rizeni-meniren">
								Podívejte se na naše řešení v praxi
							</Link>
						</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale:0.75 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1}}
							viewport={{ once: true }}
							className="w-full max-w-xl mt-20 md:mt-0 dark:shadow-light">

							<Image
								radius="sm"
								alt="Card background"
								src="/display2.webp"
								width="100%"
								height="100%"
							/>
						</motion.div>
					</div>

					{/* What we offer section */}
					<div
						className="flex flex-col w-full max-w-7xl items-center py-20 md:py-32 border-b border-slate-200 dark:border-slate-700">
						
						<motion.h1 initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }} className={title({ class: "mb-10 md:mb-24 leading-relaxed", size: "lg" })}>Co nabízíme našim klientům</motion.h1>
						<div className="flex flex-col w-full max-w-7xl space-y-4  md:space-y-0 md:grid grid-rows-6 md:grid-rows-2 grid-cols-3 gap-x-16">

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}
							 className="flex flex-col pt-10 space-y-6 items-start ">
								<ScaleW />

								<div className="flex space-x-6  items-center">
									<h2 className="font-bold text-large">Vysoce spolehlivé systémy</h2>
								</div>
								<p>Dodáváme systémy pro nepřetržité provozy s vysokými požadavky na spolehlivost. Všechny komponenty je proto možné nasadit redundantně, takže ani v případě hardwarového selhání nedojde k výpadku ovládání.</p>
								</motion.div>
							<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}
							 className="flex flex-col pt-10 space-y-6 items-start    ">
								<SecureW />
								<div className="flex space-x-6  items-center">
									<h2 className="font-bold text-large">Bezpečnost na prvním místě</h2>
								</div>
								<p>Jsme si vědomi významu kybernetické bezpečnosti u průmyslové infrastruktury. Veškerá komunikace mezi našimi komponenty je proto zabezpečena koncovým šifrováním, bránícím neautorizovaným zásahům i odposlechu zpráv.</p>
								</motion.div>
							<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}
							 className="flex flex-col pt-10 space-y-6 items-start    ">
								<PerformanceW />
								<div className="flex space-x-6  items-center">
									<h2 className="font-bold text-large">Nenáročná škálovatelná architektura</h2>
								</div>
								<p>Svá řešení navrhujeme tak, aby byla co nejsnáze rozšiřitelná. Není problém ovládat a vizualizovat tisíce i desetitisíce signálů s minimálními hardwarovými požadavky.</p>
								</motion.div>
							<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}
							 className="flex flex-col pt-10 space-y-6 items-start    ">
								<TestW />
								<div className="flex space-x-6  items-center">
									<h2 className="font-bold text-large">Široká podpora stávajících technologií</h2>
								</div>
								<p>Vizualizace a řídicí systémy dokážeme dodávat s minimálními zásahy do existující technologie. Máme zkušenosti s řadou standardních protokolů (IEC 60870-5-104, IEC 61850, Modbus, MQTT, ...) a není problém přidat další, případně můžeme pracovat i s fyzickými signály.</p>
								</motion.div>
							<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}
							 className="flex flex-col pt-10 space-y-6 items-start   ">
								<LicenceW />
								<div className="flex space-x-6 items-center">
									<h2 className="font-bold text-large">Nezávislost na třetích stranách</h2>
								</div>
								<p>Zatímco konkurenční řešení mohou být omezena licenčními podmínkami použitých SCADA platforem, my své aplikace vytváříme celé in-house a podobné limitace tak není třeba řešit.</p>
								</motion.div>
							<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}
							 className="flex flex-col pt-10 space-y-6 items-start    ">
								<SupportW />
								<div className="flex space-x-6  items-center">
									<h2 className="font-bold text-large">Uživatelská podpora 24/7</h2>
								</div>
								{/* <p>Naši zákazníci využívají MelkorVisum naprosto bezstarostně, díky plné uživatelské péči a nepřetržité dostupnosti pro rychlé řešení problémů a odborné poradenství ohledně našich systémů a aplikací.</p> */}
								<p>Svým zákazníkům nabízíme nepřetržitou telefonickou a online podporu a většinu problémů řešíme do několika hodin.</p>
								</motion.div>
						</div>
					</div>
					{/* Our successes */}
			
						<div className="flex flex-col w-full max-w-7xl items-center py-20 md:py-32 border-b border-slate-200 dark:border-slate-700">
							<motion.h1 initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }} className={title({ class: "mb-20 lg:mb-24", size: "lg" })}>Naše úspěchy</motion.h1>
							<div className="flex flex-col md:grid grid-rows-1 grid-cols-3 gap-12">
							<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5}}
							viewport={{ once: true }}>
								<Card className="py-10 px-4 lg:px-6 h-full">
									<CardHeader className="flex">
										<h2 className="font-semibold text-large text-left">Energetický dispečink Dopravní společnosti Zlín a Otrokovice</h2>
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
								<Card className="py-10 px-4 lg:px-6 h-full">
									<CardHeader className="flex">
										<h2 className="font-semibold text-large text-left">Místní řízení měnírny Heršpice a transformátorové stanice Slatina		</h2>			</CardHeader>
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
								<Card className="py-10 px-4 lg:px-6 h-full">
									<CardHeader className="flex">
										<h2 className="font-semibold text-large text-left">Dálkové řízení vytápění Orlovny Brno-Obřany	</h2>				</CardHeader>
									<CardBody>
										<p>
											Pro jednotu Orla Brno-Obřany jsme rozšířili existující řízení kotelny o soustavu bezdrátových snímačů teploty a webové rozhraní, které umožňuje sledování teploty, vzdálené ovládání kotlů i plánování automatického vytápění.</p>
									</CardBody>
								</Card>
								</motion.div>
							</div>
						</div>
				
					{/* Get started */}
					<GetStarted />
				</div>
			</section>
		</motion.div>
		</ReactLenis>
	);
}
