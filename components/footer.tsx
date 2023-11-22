'use client'
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "@/components/theme-switch";
import { MelkorLogo} from "@/components/icons";

import NextLink from "next/link";

import React from "react";
import { siteConfig } from "@/config/site";

export const Footer = () => {

	return (
                <footer className="w-full flex items-center justify-center py-3 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl px-6 pt-6 justify-center md:justify-between items-center">
                        <div className="flex-col-reverse md:flex-col space-y-2">
                                <ul className="flex flex-col items-center md:items-start md:flex-row flex-wrap ">
                                        <li>
                                                <Link className="md:mr-10 text-default-600" href='/'><p>Hlavní stránka</p></Link>
                                        </li>
                                        <li>
                                                <Link className="md:mr-10 text-default-600" href='/melkorvisum'>MelkorVisum</Link>
                                        </li>
                                        <li>
                                                <Link className="md:mr-10 text-default-600" href="/onas">O nás</Link>
                                        </li>
{/*                                         <li>
                                                <Link className="md:mr-10 text-default-600" href='/reference'>Reference</Link>
                                        </li> */}
                                        <li>
                                                <Link className="md:mr-10 text-default-600" href='/kontakt'>Kontaktujte nás</Link>
                                        </li>
                                </ul>
                                <p className="text-default-600">
                                        Copyright © 2023 Melkor Software. Všechna práva vyhrazena
                                </p>
                        </div>
                        <NextLink className="flex justify-center items-center pb-6 mr-6 md:mr-0" href="/">
                                <MelkorLogo />
                        </NextLink>
                </div>
        </footer>
	);
};