'use client'
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { title,subtitle } from "@/components/primitives";

import React from "react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export const GetStarted = () => {

	return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} 
        className="flex flex-col w-full max-w-7xl items-center text-center space-y-12 py-20 md:py-32">
            <h1 className={title({class:"leading-relaxed", size:"sm"})}>Zaujala Vás naše nabídka?</h1>
            <h2 className={subtitle({})}>Neváhejte se na nás obrátit a náš tým se s Vámi co nejdříve spojí.</h2>
            <Button color="secondary" className="bg-melkorPurple" as={Link} href={siteConfig.links.kontakt} radius="full" size="lg" >
                Kontaktujte nás
            </Button>
        </motion.div>
	);
};