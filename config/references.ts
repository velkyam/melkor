// Seznam referencí – jediný zdroj dat pro karty i pro mapu na stránce /reference.
// Novou zakázku stačí přidat sem: zobrazí se jako karta i jako bod na mapě.
// Zakázky se stejnou hodnotou `city` se na mapě spojí do jednoho bodu.

export type Reference = {
	title: string;
	description: string;
	/** Město, kde se zakázka realizovala (popisek bodu na mapě). */
	city: string;
	/** GPS souřadnice města (WGS84). */
	lat: number;
	lon: number;
	/** Kód kraje dle ISO 3166-2 (např. "CZ-JM", "SK-ZI") – kraj se na mapě zvýrazní. */
	region: string;
	/** Logo partnera zobrazené na kartě (volitelné). */
	logo?: { src: string; alt: string };
};

const OHLA = { src: "/OHLA_LOGO.png", alt: "OHLA_LOGO" };

export const references: Reference[] = [
	{
		title: "Dálková diagnostika trakčních systémů pro LCRD Žilina",
		description:
			"Pro Železnice Slovenskej republiky jsme dodali systém dálkové diagnostiky, který zajišťuje nepřetržitý dohled nad osvětlením nástupišť a vlakové trasy, elektrickým ohřevem výhybek, zabezpečením vstupů do kabelových šachet a dalšími pomocnými systémy v rámci dopravního uzlu Žilina a přilehlých stanic spadajících pod oblastní centrum řízení dopravy (LCRD). Projekt byl postaven na druhé generaci platformy MelkorVisum ve spolupráci s OHLA ŽS, a. s.",
		city: "Žilina",
		lat: 49.2232,
		lon: 18.7394,
		region: "SK-ZI",
		logo: OHLA,
	},
	{
		title: "Místní řízení měnírny MET-K pro Dopravný podnik mesta Košice",
		description:
			"Pro Dopravný podnik mesta Košice jsme dodali modernizovaný řídicí systém měnírny MET-K, který ovládá stávající technologii. Abychom zajistili plynulé pokračování obsluhy, celý systém byl navržen tak, aby (krom použití moderní techniky) přesně odpovídal řízení předešlému. Projekt jsme realizovali ve spolupráci s OHLA ŽS, a. s.",
		city: "Košice",
		lat: 48.7164,
		lon: 21.2611,
		region: "SK-KI",
		logo: OHLA,
	},
	{
		title: "Energetický dispečink Plzeňských městských dopravních podniků",
		description:
			"Pro PMDP jsme vytvořili systém pro místní i dálkové řízení všech jedenácti měníren a jedné superkapacitorové posilovací stanice, které zajišťují provoz tramvají a trolejbusů v Plzni. Součástí řešení je redundantní dvojice centrálních serverů, jedenáct serverů místního řízení a zajištění primární komunikační cesty přes optickou linku, DSL a GSM i záložní komunikace přes rádiový vysílač. Projekt byl postaven na druhé generaci platformy MelkorVisum ve spolupráci s OHLA ŽS, a. s.",
		city: "Plzeň",
		lat: 49.7384,
		lon: 13.3736,
		region: "CZ-PL",
		logo: OHLA,
	},
	{
		title: "Energetický dispečink Dopravní společnosti Zlín a Otrokovice",
		description:
			"Na naší technologii běží dispečink, který má na starosti napájení trolejbusů v celém Zlíně a Otrokovicích. Zajišťujeme nepřetržitý provoz deseti měníren a jejich místní i dálkové řízení, které jsme dodali v rámci dvou zakázek ve spolupráci s firmou OHLA ŽS.",
		city: "Zlín a Otrokovice",
		lat: 49.2244,
		lon: 17.6628,
		region: "CZ-ZL",
		logo: OHLA,
	},
	{
		title: "Místní řízení měnírny Heršpice a transformátorové stanice Slatina",
		description:
			"Pro Dopravní podnik města Brna jsme dodali modernizovaný řídicí systém, který ovládá stávající technologii. Abychom zajistili plynulé pokračování obsluhy, celý systém byl navržen tak, aby (krom použití moderní techniky) přesně odpovídal řízení předešlému.",
		city: "Brno",
		lat: 49.1951,
		lon: 16.6068,
		region: "CZ-JM",
	},
	{
		title: "Dálkové řízení vytápění Orlovny Brno-Obřany",
		description:
			"Pro jednotu Orla Brno-Obřany jsme rozšířili existující řízení kotelny o soustavu bezdrátových snímačů teploty a webové rozhraní, které umožňuje sledování teploty, vzdálené ovládání kotlů i plánování automatického vytápění.",
		city: "Brno",
		lat: 49.1951,
		lon: 16.6068,
		region: "CZ-JM",
	},
];
