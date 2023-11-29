"use client"
import { Image } from "@nextui-org/image";
import { title } from "@/components/primitives";
import { GetStarted } from "@/components/get-started";
import { Card} from "@nextui-org/card";
import { Train, Panel, Factory, Building, Gas, Car } from "@/components/icons";




export default function DocsPage() {

	return (
		<div className="flex flex-col items-center mx-auto w-full">
			<div className="w-full flex flex-col items-center lg:pb-20 pt-20  border-b border-slate-200 dark:border-slate-700  bg-top bg-cover bg-no-repeat bg-melkor-pattern2 ">
				<h1 className={title()}>MelkorVisum</h1>
				<div className="flex flex-col items-center max-w-7xl px-6">
					<Card isBlurred className="my-20 px-6 py-10 dark:border dark:border-slate-700">
						<p className="text-left"> MelkorVisum je naše vizualizační a řídicí platforma, na které stavíme většinu dodávaných projektů. Srdcem naší platformy je řídicí server, který zajišťuje komunikaci s technologií, systém varování a alarmů, správu deníků a další. K serveru lze připojit libovolný počet vizualizačních klientů – desktopových, případně mobilních nebo webových aplikací, umožňujících zobrazení systémů, práci s deníky událostí a odesílání povelů. Pro menší projekty a místní řízení je samozřejmostí i možnost připojení klienta přímo k technologii, bez nutnosti dodávat celý řídicí server. Platforma podporuje všechny běžně využívané operační systémy (Windows, Linux, MacOS) s minimálními hardwarovými požadavky.</p>
					</Card>
				</div>
			</div>

			<div className="max-w-7xl px-6 ">

				<div className="flex justify-center items-center grid grid-cols-12 py-20 md:py-32 border-b border-slate-200 dark:border-slate-700">
					<div className="flex flex-col col-span-12 lg:col-span-4  lg:items-start ">
						<h1 className={title({size: "sm"})}>SCADA systémy</h1>
						<p className="text-left pt-10 pb-20">S našimi systémy pro vizualizaci a řízení máte možnost monitorovat a ovládat energetické a průmyslové procesy v reálném čase nejen přímo na místě, ale i ze vzdáleného dispečinku. Kromě toho nabízíme specializovaná řešení pro třídění a sběr dat, díky kterým můžete efektivně zaznamenávat komplexní data z různých zařízení. Tato data pak mohou být analyzována pro identifikaci problémů a optimalizaci provozu.</p>
					</div>
					<Image removeWrapper alt="MelkorVisum_screenshot" radius="sm" className=" w-full col-span-12 lg:col-end-13 lg:col-span-6" src="/macbook2.webp"></Image>
				</div>
				<div className="flex flex-col-reverse lg:grid grid-cols-12 lg:grid-rows-1 py-20 md:py-32 justify-center items-center border-b border-slate-200 dark:border-slate-700 items-center">
					<Image removeWrapper alt="MelkorVisum_screenshot" shadow="lg" radius="sm" className="dark:shadow-light max-w-xl w-full col-span-12 lg:col-span-6" src="/display_spotreba.webp"></Image>
					<div className="flex flex-col col-span-12 lg:col-start-8 lg:col-span-4 lg:items-start ">
						<h1 className={title({size: "sm"})}>Proč MelkorVisum?</h1>
						<p className="text-left pt-10 pb-20">Zatímco většina konkurenčních firem licencuje SCADA platformy třetích stran a staví své systémy na nich, naše řešení MelkorVisum jnonee vyvinuli na vlastním know-how, což nám umožňuje flexibilně přizpůsobit každou část systému specifickým potřebám a požadavkům konkrétního zákazníka. Naše vizualizace je postavená na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž je stabilní, bezpečná a uživatelsky přívětivá. Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do existujících provozů.</p>
					</div>
				</div>
				<div className="flex flex-col py-20 md:py-32 items-center border-b border-slate-200 dark:border-slate-700">
					<h1 className={title({ class: "mb-10 md:mb-24"})}>Možnosti využití</h1>
					{/* 					<p className="text-left pt-10 pb-20 lg">Naše inovativní řešení nalezne uplatnění v široké škále odvětví a oblastí, přinášejíc zásadní přínosy v mnoha ohledech. Jeho využití je možné v měnírnách a dispečinkách dopravních podniků, kde umožňuje efektivní správu a koordinaci dopravního provozu. Dále je vhodné pro energetické zdroje a rozvodnou síť, včetně fotovoltaických elektráren a transformátorových stanic. V průmyslových provozech zase naše řešení optimalizuje výrobní linky, zvyšuje efektivitu a umožňuje lepší řízení průmyslových procesů. V oblasti vytápění, klimatizace a inteligentního řízení budov přinášíme inovace, které umožňují optimalizaci spotřeby energie a zajišťují pohodlné prostředí v budovách. Dále podporujeme kontrolu spotřeby a komunikaci s elektroměry, plynoměry a dalšími měřicími zařízeními. Naše technologická řešení jsou rovněž využitelná v energetických dispečinkách a nabíjecích stanicích pro elektromobily, přičemž nabízíme komplexní a spolehlivé možnosti správy a monitoringu. To všechno je pouze začátek, naše řešení mohou být aplikována v mnoha dalších oblastech, poskytujíce tak flexibilitu a širokou škálu výhod pro různé odvětví a sektory.</p>
 */}					{/* <Image removeWrapper alt="Melkorvisum_screen" shadow="md" radius="sm" className="w-full xl:w-6/12 lg:dark:shadow-white" src="/display_spotreba.webp"></Image> */}
					<div className="grid grid-flow-row-dense lg:grid-cols-3 w-full gap-6 lg:gap-12">
						<div className="flex flex-col pt-10 space-y-6 items-center ">
							<Train />

							<div className="flex space-x-6  items-center text-center">
								<h4 className=" text-md max-w-xs">Měnírny a dispečinky dopravních podniků</h4>
							</div>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-center ">
							<Panel />

							<div className="flex space-x-6  items-center text-center">
								<h4 className=" text-md max-w-xs">Energetické zdroje i rozvodná síť </h4>
							</div>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-center ">
							<Factory />

							<div className="flex space-x-6  items-center text-center">
								<h4 className=" text-md max-w-xs">Výrobní linky průmyslových provozů</h4>
							</div>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-center ">
							<Building/>

							<div className="flex space-x-6  items-center text-center">
								<h4 className=" text-md max-w-xs">Vytápění a klimatizace, řízení inteligentních budov</h4>
							</div>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-center ">
							<Gas />

							<div className="flex space-x-6  items-center text-center">
								<h4 className=" text-md max-w-xs">Kontrola spotřeby, komunikace s elektroměry, plynoměry a jinými měřicími zařízeními</h4>
							</div>
						</div>
						<div className="flex flex-col pt-10 space-y-6 items-center ">
							<Car />

							<div className="flex space-x-6  items-center text-center">
								<h4 className=" text-md max-w-xs">Energetické dispečinky, nabíjecí stanice elektromobilů</h4>
							</div>
						</div>





					</div>


				</div>
				{/* </div> */}
				{/* Get started */}
				<GetStarted />
			</div>
		</div>

	);
}
