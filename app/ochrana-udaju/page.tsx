"use client"
import { title } from "@/components/primitives";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar } from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
export default function PrivacyPage() {
	
	return (

		<div className=" justify-center py-20 w-full">
			<h1 className={title()}>Ochrana osobních údajů</h1>
			<div className="w-full my-20 flex flex-col items-left justify-center">
			<p className="mb-20 text-left">
      V případě, že vyplňujete kontaktní formulář na našem webu, zpracováváme Vaše osobní údaje. Především Váše jméno a kontaktní email, který slouží pouze nám pro doručení odpovědi na Váš dotaz.

S Vašimi údaji je nakládáno v souladu se zákonem 101/2000 Sb. o ochraně osobních údajů, a dále také dle rozšiřujícího a sjednocujícího nařízení GDPR v podobě směrnice (EU) 2016/679, která původní zákon 101/2000 Sb. a směrnici 95/46/ES nahrazuje.				</p>

    <Accordion fullWidth={false} className="w-full block" >
      <AccordionItem key="1" aria-label="Shromažďování osobních údajů" title="Správce osobních údajů" className="text-left">
        <p>Správcem osobních údajů je společnost Melkor Software, s.r.o., se sídlem Hlaváčova 618/28, 614 00 Brno, IČO 173 12 914 DIČ CZ17312914, zapsaná v obchodním rejstříku vedeném u Krajského soudu v Brně, spisová značka C 129441, a jako správce zpracováváme vaše osobní údaje.
</p>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Shromažďování osobních údajů" title="Jaká máte práva v souvislosti s ochranou vašich osobních údajů?" className="text-left">
        <p>Jaká máte práva v souvislosti s ochranou vašich osobních údajů?
Právo na přístup k zpracovaným vlastním osobním údajům
Vaším právem je požádat Melkor Software, s.r.o o informace, jaké osobní údaje a v jakém rozsahu a pro jaký účel o Vás zpracováváme. Tyto informace Vám poskytneme zdarma ve lhůtě nejpozději 30 dnů, v mimořádných situacích pak nejpozději ve lhůtě 90 dnů. O prodloužení lhůty v mimořádných případech Vás budeme včas informovat. Pokud budete požadovat sdělení informací, které o Vás evidujeme, budeme nejprve potřebovat ověřit, že jste skutečně osoba, které náleží tato informace. Ve Vaší žádosti tedy uveďte dostatečnou identifikaci Vaší osoby. V případě potřeby máme právo vyžádat si doplňující informace k Vaší identifikaci, než Vám poskytneme osobní údaje, které zpracováváme k Vaší osobě. Naším právem pak je s odůvodněním zamítnout požadavky na informace, které jsou bezdůvodné, či se nepřiměřeně opakují, případně jejich získání vyžaduje nepřiměřené úsilí, nebo by byly obtížně získatelné (typicky ze záložních systémů, archívů apod.).
</p>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Použití osobních údajů" title="Právo na opravu, úpravu, doplnění" className="text-left">
        <p>Jelikož se mohou osobní údaje v průběhu času měnit (například změna Příjmení), budeme rádi, pokud nás informujete, že u Vás nastala nějaká změna, tak abychom Vaše osobní údaje měli aktuální a nedocházelo k případným omylům.   Podání informace o změně údajů je nezbytně nutné pro to, abychom mohli řádně vykonávat svoji činnost Správce. S tím souvisí i Vaše právo na opravu osobních údajů, které o Vás evidujeme. Pokud zjistíte, že naše údaje již nejsou aktuální, máte právo požadovat jejich opravu.
</p>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Uchovávání osobních údajů" title="Právo na výmaz, tzv. být zapomenut" className="text-left">
        <p>Pokud jste nám někdy udělili souhlas se zpracováním svých osobních údajů (například emailová adresa v rámci zasílaného newsletteru), máte právo jej kdykoli odvolat a my údaje, které zpracováváme výhradně na základě Vašeho souhlasu, máme povinnost vymazat. Právo na výmaz se nevztahuje na zpracovávané údaje v rámci povinnosti plnění smlouvy, zákonných důvodů, či oprávněných zájmů. Pokud jsou některá Vaše data uchovávána v záložních systémech, které automatizovaně zajišťují odolnost všech našich systémů a plní funkci ochrany ztráty dat pro případy havárií, není v našich silách vymazat tyto data i ze záložních systémů a nezřídka to není ani technicky proveditelné. Nicméně tato data nejsou dále nijak aktivně zpracovávána a nebudou sloužit k dalším účelům zpracování.</p>
      </AccordionItem>
      <AccordionItem key="5" aria-label="Sdílení osobních údajů" title="Právo na omezení zpracování" className="text-left">
        <p>Máte právo na omezení zpracování vašich osobních údajů, v případě, že se domníváte, že takto evidované nejsou přesné, případně je zpracováváme protiprávně a dále pokud se domníváte, že tyto údaje již nepotřebujeme pro účely jejich zpracování.
</p>
      </AccordionItem>
      <AccordionItem key="6" aria-label="Cookies a sledování" title="Právo na přenositelnost údajů" className="text-left">
        <p>Máte právo získat osobní údaje, které o vás evidujeme, ve strukturovaném, běžně používaném a strojově čitelném formátu. Na základě vaší žádosti mohou být tato data předána jinému správci.</p>
      </AccordionItem>
      <AccordionItem key="7" aria-label="Vaše práva" title="Právo vznést námitku" className="text-left">
        <p>Pokud se domníváte, že Vaše osobní údaje nezpracováváme v souladu s platnou legislativou ČR a Unie, máte právo vznést námitku a my následně prověříme oprávněnost Vašeho požadavku. V okamžiku podání námitky, bude zpracování vašich osobních údajů omezeno, dokud nebude ověřeno, zda je námitka oprávněná. Informujeme Vás, že Vaším právem je obrátit se také s námitkou proti zpracovávaným osobním údajům, které o Vás zpracováváme, na příslušný dozorový úřad na ochranu osobních údajů na adrese: Úřad pro ochranu osobních údajů Pplk. Sochora 27, 170 00 Praha 7.
</p>
      </AccordionItem>

    </Accordion>

	<p className="text-left pt-20">
  Pokud máte jakékoli dotazy ohledně zpracovávání osobních údajů kontaktujte nás na emailu info@melkor.cz.
 <br/>
		Datum aktualizace: 09/12/2023
		</p>

			</div>


			


		
		</div>

	);
}
