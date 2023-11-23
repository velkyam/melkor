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




export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center  ">
			{/* hero row div */}
			<div className="flex justify-center bg-center bg-cover bg-no-repeat bg-hero-pattern dark:border-b border-slate-700 shadow-sm w-full py-6 md:py-16 pb-24"  >
				<div className="flex flex-col-reverse justify-between w-full max-w-7xl px-6 md:flex-row"  >
					<div className="inline-block max-w-md space-y-10 ">
						<div className={title({ size: "lg" })}>
							<div className="py-2">
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
						<h2 className={subtitle({ class: "mt-4 rounded-xl", backdrop:"blur"})}>
							Nabízíme komplexní softwarová řešení na
							klíč. Prostřednictvím našich špičkových SCADA systémů Vám můžeme usnadnit řízení
							provozu a zvýšit jeho efektivitu.
						</h2>
						<Button color="primary" className="bg-melkorPurple" as={Link} href={siteConfig.links.melkorvisum} radius="full" size="lg">
							Více o našem řešení
						</Button>
					</div>
					<div className="inline-block max-w-2xl pb-10">
						<video autoPlay loop muted playsInline poster="/poster.webp" src={"/Untitled.mp4"} />
					</div>

				</div>
			</div>


			<div className="container flex flex-col items-center  w-full max-w-7xl px-6 pt-20 md:pt-32 ">
				<h1 className={title({ class: "mb-10", size: "lg" })}>MelkorVisum</h1>
				<h2 className={subtitle({ class: "mb-20 w-full md:max-w-5xl" })}>Našim hlavním produktem je plně přizpůsobitelná a integrovaná SCADA platforma MelkorVisum, která nám umožňuje efektivně vyvíjet vysoce spolehlivé vizualizační a řídicí systémy pro průmyslové, energetické či dopravní provozy.</h2>
				{/* card row */}
				<div className="flex flex-col w-full max-w-7xl space-y-4  md:space-y-0 md:grid grid-rows-3 md:grid-rows-1 grid-cols-3 gap-6">
					<Card className=" height-256 ">
						<Image
							removeWrapper
							alt="Software_engineer_working"
							className="z-0 w-full h-fit max-h-52 object-cover"
							src="/nerd.webp"
							radius="none"
						/>
						<CardBody className="flex flex-col pt-10 space-y-6 items-start items-center">
							<h4 className="font-bold text-large text-center">Kompletní softwarová<br />řešení na klíč</h4>
							<p className="mx-4">Zatímco naši konkurenti licencují SCADA platformy třetích stran, naše řešení MelkorVisum jsme vyvinuli celé od základů. Díky tomu můžeme snadno a rychle přizpůsobit veškeré části systému na míru konkrétním požadavkům.</p>
						</CardBody>
						<CardFooter className="flex justify-center pb-10">
							<Link href="/melkorvisum">
								Více o MelkorVisu
							</Link>
						</CardFooter>
					</Card>

					<Card className=" height-256 ">
						<Image
							removeWrapper
							alt="Electrical_engineer_using_MelkorVisum_interface"
							className="z-0 w-full h-fit max-h-52 object-cover"
							src="/vzhled2.webp"
							radius="none"
						/>
						<CardBody className="flex flex-col pt-10 space-y-6 items-start  items-center">
							<h4 className="font-bold text-large text-center">Moderní vzhled <br />přizpůsobený na míru</h4>
							<p className="mx-4">Naše vizualizace je postavená na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž je stabilní, bezpečná a uživatelsky přívětivá.</p>
						</CardBody>
						<CardFooter className="flex justify-center pb-10">
							<Link href="/melkorvisum">
								Více o MelkorVisu
							</Link>
						</CardFooter>
					</Card>

					<Card className="height-256 ">
						<Image
							removeWrapper
							alt="Electrical_engineers_installing_plc"
							className="z-0 w-full h-fit max-h-52 object-cover"
							src="/plc.webp"
							radius="none"
						/>
						<CardBody className="flex flex-col pt-10 space-y-6 items-start  items-center">
							<h4 className="font-bold text-large text-center">Integrace se <br />stávajícími technologiemi</h4>
							<p className="mx-4">Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do existujících provozů.</p>
						</CardBody>
						<CardFooter className="flex justify-center pb-10">
							<Link href="/melkorvisum">
								Více o MelkorVisu
							</Link>
						</CardFooter>
					</Card>



				</div>

				{/* One Platform row */}

				<div className="flex flex-col md:flex-row w-full justify-between max-w-7xl  py-20 md:py-32  border-b border-slate-200 dark:border-slate-700">
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
							Ať už potřebujete moderní energetický dispečink, automatizaci výrobní linky či přehled nad spotřebou energií, Melkor Software Vám poskytne spolehlivé řešení s maximální flexibilitou.
						</h2>
						<Link href="/reference">
							Podívejte se na naše řešení v praxi
						</Link>
					</div>
					<Image className="w-full max-w-xl mt-10 md:mt-0"
					radius="sm"
						alt="Card background"
						src="/display2.webp"
					/>
				</div>

				{/* What we offer section */}
				<div className="flex flex-col w-full max-w-7xl items-center py-20 md:py-32 border-b border-slate-200 dark:border-slate-700">
					<h1 className={title({ class: "mb-10 md:mb-24", size: "lg" })}>Co nabízíme našim klientům</h1>
					<div className="flex flex-col w-full max-w-7xl space-y-4  md:space-y-0 md:grid grid-rows-6 md:grid-rows-2 grid-cols-3 gap-x-16">

						<div className="flex flex-col pt-10 space-y-6 items-start ">
							<ScaleW />

							<div className="flex space-x-6  items-center">
								<h4 className="font-bold text-large">Vysoce spolehlivé systémy</h4>
							</div>
							<p>Dodáváme i systémy pro nepřetržité provozy s vysokými požadavky na spolehlivost. Všechny komponenty je proto možné nasadit redundantně, takže ani v případě hardwarového selhání nedojde k výpadku ovládání.</p>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-start    ">
							<SecureW />
							<div className="flex space-x-6  items-center">
								<h4 className="font-bold text-large">Bezpečnost na předním místě</h4>
							</div>
							<p>Jsme si vědomi významu kybernetické bezpečnosti u průmyslové infrastruktury. Veškerá komunikace mezi našimi komponenty je proto zabezpečena koncovým šifrováním, bránícím neautorizovaným zásahům i odposlechu zpráv.</p>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-start    ">
							<PerformanceW />
							<div className="flex space-x-6  items-center">
								<h4 className="font-bold text-large">Nenáročná škálovatelná architektura</h4>
							</div>
							<p>Svá řešení navrhujeme tak, aby byla co nejsnáze rozšířitelná. Není problém ovládat a vizualizovat tisíce i desetitisíce signálů s minimálními hardwarovými požadavky.</p>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-start    ">
							<TestW />
							<div className="flex space-x-6  items-center">
								<h4 className="font-bold text-large">Široká podpora stávajících technologií</h4>
							</div>
							<p>Vizualizace a řídicí systémy dokážeme dodávat s minimálními zásahy do existující technologie. Máme zkušenosti s řadou standardních protokolů (IEC 60870-5-104, IEC 61850, Modbus, MQTT, ...) a není problém přidat další, případně můžeme pracovat i s fyzickými signály.</p>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-start   ">
							<LicenceW />
							<div className="flex space-x-6 items-center">
								<h4 className="font-bold text-large">Nezávislost na třetích stranách</h4>
							</div>
							<p>Zatímco konkurenční řešení mohou být omezena licenčními podmínkami použitých SCADA platforem, my své aplikace vytváříme celé in-house a podobné limitace tak není třeba řešit.</p>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-start    ">
							<SupportW />
							<div className="flex space-x-6  items-center">
								<h4 className="font-bold text-large">Uživatelská podpora 24/7</h4>
							</div>
							<p>Naši zákazníci využívají MelkorVisum naprosto bezstarostně, díky plné uživatelské péči a nepřetržité dostupnosti pro rychlé řešení problémů a odborné poradenství ohledně našich systémů a aplikací.</p>
						</div>
					</div>
				</div>
				{/* Our successes */}
				<div className="flex flex-col w-full max-w-7xl items-center py-20 md:py-32 border-b border-slate-200 dark:border-slate-700">
					<div className={title({ class: "mb-10 md:mb-24", size: "lg" })}>Naše úspěchy</div>
					<div className="flex flex-col md:grid grid-rows-1 grid-cols-3 gap-12">
						<Card className=" py-6 px-6">
							<CardHeader className="flex">
								<h4 className="font-semibold text-large text-left">Energetický dispečink Dopravní společnosti Zlín a Otrokovice</h4>
							</CardHeader>
							<CardBody>
								<p>Na naší technologii běží dispečink, který má na starosti napájení trolejbusů v celém Zlíně a Otrokovicích. Zajišťujeme nepřetržitý provoz deseti měníren a jejich místní i dálkové řízení, které jsme dodali v rámci dvou zakázek ve spolupráci s firmou OHLA ŽS.</p>
							</CardBody>
						</Card>
						<Card className=" py-6 px-6">
							<CardHeader className="flex">
								<h4 className="font-semibold text-large text-left">Místní řízení měnírny Heršpice a transformátorové stanice Slatina		</h4>			</CardHeader>
							<CardBody>
								<p>Pro Dopravní podnik města Brna jsme dodali modernizovaný řídicí systém, který ovládá stávající technologii, museli jsme jej proto uzpůsobit tak, aby (krom použití moderní techniky) přesně odpovídal systému předešlému.</p>
							</CardBody>
						</Card>
						<Card className=" py-6 px-6">
							<CardHeader className="flex">
								<h4 className="font-semibold text-large text-left">Dálkové řízení vytápění Orlovny Brno-Obřany	</h4>				</CardHeader>
							<CardBody>
								<p>
									Pro jednotu Orla Brno-Obřany jsme rozšířili existující řízení kotelny o soustavu bezdrátových snímačů teploty a webové rozhraní, které umožňuje sledování teploty, vzdálené ovládání kotlů i plánování automatického vytápění.</p>
							</CardBody>
						</Card>
					</div>
				</div>
				{/* Get started */}
			<GetStarted/>
			</div>
		</section>

	);
}
