'use client'
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "@/components/theme-switch";
import { MelkorLogo } from "@/components/icons";

import NextLink from "next/link";

import React from "react";
import { siteConfig } from "@/config/site";

export const Footer = () => {

        return (
                <footer className="w-full flex flex-col  items-center py-3 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex w-full max-w-7xl px-6 pt-6 grid grid-cols-2 lg:grid-cols-12">
                                <div className="flex-col-reverse md:flex-col space-y-2 items-start lg:col-span-8">
                                        <ul className="flex flex-col items-start md:flex-row flex-wrap ">

                                                <li>
                                                        <Link className="md:mr-10 text-default-600" href='/'><p>Hlavní stránka</p></Link>
                                                </li>
                                                <li>
                                                        <Link className="md:mr-10 text-default-600" href='/melkorvisum'>MelkorVisum</Link>
                                                </li>
                                                <li>
                                                        <Link className="md:mr-10 text-default-600" href="/onas">O nás</Link>
                                                </li>
                                                <li>
                                                        <Link className="md:mr-10 text-default-600" href='/reference'>Reference</Link>
                                                </li>
                                                <li>
                                                        <Link className="md:mr-10 text-default-600" href='/kontakt'>Kontaktujte nás</Link>
                                                </li>

                                                <ThemeSwitch className="mt-4 md:my-0" />
                                        </ul>
                                </div>
                                <NextLink className="flex items-start ml-auto lg:col-span-4" href="/">
                                        <MelkorLogo />
                                </NextLink>

                                <p className="flex w-full text-default-600 col-span-8 mt-6 md:mt-0">
                                        Copyright © 2023 Melkor Software. Všechna práva vyhrazena.
                                </p>
                        </div>
                </footer>
        );
};