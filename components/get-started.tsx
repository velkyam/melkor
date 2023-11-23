'use client'
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { title,subtitle } from "@/components/primitives";

import React from "react";
import { siteConfig } from "@/config/site";

export const GetStarted = () => {

	return (
			<div className="flex flex-col w-full max-w-7xl items-center text-center space-y-12 py-20 md:py-32">
            <h1 className={title({class:"leading-relaxed", size:"lg"})}>Zaujala Vás naše nabídka?</h1>
            <h2 className={subtitle({})}>Poskytněte nám pár rychlých údajů, a náš tým se s Vámi co nejdříve spojí.</h2>
            <Button color="secondary" className="bg-melkorPurple" as={Link} href={siteConfig.links.kontakt} radius="full" size="lg" >
                Kontaktujte nás
            </Button>
        </div>
	);
};