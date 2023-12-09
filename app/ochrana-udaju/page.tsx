"use client"
import { title } from "@/components/primitives";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar } from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
export default function PrivacyPage() {
	
	return (

		<div className=" justify-center py-20 w-full">
			<h1 className={title()}>Ochrana osobních údajů</h1>
			<div className="w-full my-20 flex flex-col items-center justify-center">
			<p className="mb-20 text-left">
				Tyto zásady ochrany osobních údajů popisují způsob, jakým naše webové stránky shromažďují, používají a uchovávají osobní údaje. Tyto zásady ochrany osobních údajů mohou být občas revizovány a aktualizovány. Vaše užití našich webových stránek je považováno za vaše souhlasné přijetí těchto zásad.
				</p>

    <Accordion fullWidth={false} className="w-full block" >
      <AccordionItem key="1" aria-label="Shromažďování osobních údajů" title="Shromažďování osobních údajů" className="text-left">
        <p>Při používání našich webových stránek můžeme shromažďovat osobní údaje, jako jsou jméno, e-mailová adresa a další informace, které nám poskytnete prostřednictvím kontaktního formuláře.</p>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Použití osobních údajů" title="Použití osobních údajů" className="text-left">
        <p>Osobní údaje, které nám poskytnete, mohou být použity ke komunikaci s vámi ohledně vašeho požadavku nebo dotazu, jakož i ke zlepšení našich služeb a nabídek.</p>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Uchovávání osobních údajů" title="Uchovávání osobních údajů" className="text-left">
        <p>Vaše osobní údaje budou uchovávány pouze po dobu nezbytně nutnou k dosažení účelu, pro který byly shromážděny. Mohou být uchovávány na základě vašeho souhlasu nebo v souladu s platnými právními předpisy.</p>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Sdílení osobních údajů" title="Sdílení osobních údajů" className="text-left">
        <p>Vaše osobní údaje nebudou prodány, výměnně poskytnuty nebo sdíleny s třetími stranami, s výjimkou situací, kdy je to nezbytné pro splnění právních povinností nebo za účelem poskytnutí služeb, které jste vyžádali.</p>
      </AccordionItem>
      <AccordionItem key="5" aria-label="Cookies a sledování" title="Cookies a sledování" className="text-left">
        <p>Naše webové stránky mohou využívat cookies a jiné technologie sledování k získání informací o vašem prohlížení a chování na internetu. Tyto informace mohou zahrnovat IP adresy, typ prohlížeče, operační systém a další technické informace. Tyto údaje mohou být využity ke zlepšení fungování našich stránek a poskytnutí lepších služeb.</p>
      </AccordionItem>
      <AccordionItem key="6" aria-label="Vaše práva" title="Vaše práva" className="text-left">
        <p>Máte právo požadovat přístup k vašim osobním údajům, opravu nepřesných údajů nebo jejich výmaz. Můžete také odvolat souhlas se zpracováním osobních údajů nebo podat stížnost u dozorového úřadu.</p>
      </AccordionItem>
      <AccordionItem key="7" aria-label="Bezpečnost" title="Bezpečnost" className="text-left">
        <p>Používáme odpovídající technická a organizační opatření k ochraně vašich osobních údajů před ztrátou, zneužitím nebo neoprávněným přístupem.</p>
      </AccordionItem>
      <AccordionItem key="8" aria-label="Kontaktní informace" title="Kontaktní informace" className="text-left">
        <p>Pokud máte jakékoli otázky ohledně této zásady ochrany osobních údajů, kontaktujte nás prostřednictvím kontaktního formuláře na našich webových stránkách.</p>
      </AccordionItem>
    </Accordion>

	<p className="pt-20">
		Datum aktualizace: 07/12/2023
		</p>

			</div>


			


		
		</div>

	);
}
