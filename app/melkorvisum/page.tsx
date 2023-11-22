import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

export default function DocsPage() {
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col items-center max-w-7xl  pb-20 md:pb-32 border-b border-slate-200 dark:border-slate-700">
				<h1 className={title()}>MelkorVisum</h1>
				<p className="text-left lg:px-6 pt-10 pb-20"> Srdcem naší platformy je řídicí server, který zajišťuje komunikaci s technologií, systém varování a alarmů, správu deníků a další. K serveru lze připojit libovolný počet vizualizačních klientů – desktopových, případně mobilních nebo webových klientů, umožňujících zobrazení systémů, práci s deníky událostí a odesílání povelů. Pro menší projekty a místní řízení je samozřejmostí i možnost připojení klienta přímo k technologii, bez nutnosti dodávat celý řídicí server. Platforma podporuje všechny běžně využívané operační systémy (Windows, Linux, MacOS) s minimálními hardwarovými požadavky.</p>
				<Image removeWrapper alt="Macbook_view" radius="none" className="w-full xl:w-8/12 " src="/macbook_6.webp"></Image>
			</div>
			<div className="flex xl:flex-row flex-col py-20 md:py-32 justify-center items-center border-b border-slate-200 dark:border-slate-700">
				<div className="flex-col lg:mx-12 xl:mx-36">
					<h1 className={title()}>SCADA systémy</h1>
					<p className="text-left pt-10 pb-20">S našimi systémy pro vizualizaci a řízení máte schopnost monitorovat a ovládat energetické a průmyslové procesy v reálném čase nejen přímo na místě, ale i z jakéhokoli vzdáleného dispečinku. Kromě toho nabízíme specializovaná řešení pro třídění a sběr dat, což znamená schopnost efektivně a současně zaznamenávat komplexní data z různých zařízení. Tato data pak mohou být analyzována pro identifikaci problémů a optimalizaci provozu.</p>
				</div>
				<Image removeWrapper alt="MelkorVisum_screenshot" shadow="md" radius="sm" className="max-w-4xl w-full xl:w-8/12" src="/MR1.png"></Image>
			</div>
			<div className="flex xl:flex-row flex-col-reverse py-20 md:py-32 justify-center items-center border-b border-slate-200 dark:border-slate-700">
				<Image removeWrapper alt="MelkorVisum_screenshot" shadow="md" radius="sm" className="max-w-4xl w-full xl:w-8/12" src="/trakcni2.png"></Image>
				<div className="flex-col lg:mx-12 xl:mx-36">
					<h1 className={title()}>Proč MelkorVisum?</h1>
					<p className="text-left pt-10 pb-20">Zatímco většina konkurenčních firem licencuje SCADA platformy třetích stran a staví své systémy od nich, naše řešení MelkorVisum jsme vyvinuli na vlastním know-how, což nám umožňuje flexibilně přizpůsobit každou část systému specifickým potřebám a požadavkům konkrétního zákazníka. Naše vizualizace je postavená na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž je stabilní, bezpečná a uživatelsky přívětivá. Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do existujících provozů.</p>
				</div>
			</div>
			<div className="flex flex-col max-w-7xl  py-20 md:py-32 items-center border-b border-slate-200 dark:border-slate-700">
				<h1 className={title()}>Případy použití</h1>
				<p className="text-left pt-10 pb-20 lg:px-6">Naše inovativní řešení nalezne uplatnění v široké škále odvětví a oblastí, přinášejíc zásadní přínosy v mnoha ohledech. Jeho využití je možné v měnírnách a dispečinkách dopravních podniků, kde umožňuje efektivní správu a koordinaci dopravního provozu. Dále je vhodné pro energetické zdroje a rozvodnou síť, včetně fotovoltaických elektráren a transformátorových stanic. V průmyslových provozech zase naše řešení optimalizuje výrobní linky, zvyšuje efektivitu a umožňuje lepší řízení průmyslových procesů. V oblasti vytápění, klimatizace a inteligentního řízení budov přinášíme inovace, které umožňují optimalizaci spotřeby energie a zajišťují pohodlné prostředí v budovách. Dále podporujeme kontrolu spotřeby a komunikaci s elektroměry, plynoměry a dalšími měřicími zařízeními. Naše technologická řešení jsou rovněž využitelná v energetických dispečinkách a nabíjecích stanicích pro elektromobily, přičemž nabízíme komplexní a spolehlivé možnosti správy a monitoringu. To všechno je pouze začátek, naše řešení mohou být aplikována v mnoha dalších oblastech, poskytujíce tak flexibilitu a širokou škálu výhod pro různé odvětví a sektory.</p>
				<Image removeWrapper alt="Melkorvisum_screen" shadow="md" radius="sm" className="w-full xl:w-8/12" src="/display_spotreba2.jpg"></Image>
			</div>
			{/* Get started */}
			<div className="flex flex-col w-full max-w-7xl items-center text-center space-y-12 py-20 md:py-32">
				<h1 className={title({ size: "lg" })}>Zaujala Vás naše nabídka?</h1>
				<h2 className={subtitle({})}>Poskytněte nám pár rychlých údajů, a náš tým se s Vámi co nejdříve spojí.</h2>
				<Button color="secondary" className="bg-melkorPurple" as={Link} href={siteConfig.links.kontakt} radius="full" size="lg" >
					Kontaktujte nás
				</Button>
			</div>
		</div>
	);
}
