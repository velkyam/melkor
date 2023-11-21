'use client'
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "@/components/theme-switch";
import { MelkorLogo} from "@/components/icons";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import React from "react";

import { siteConfig } from "@/config/site";
export const Footer = () => {

	return (
        <NextLink>

<MelkorLogo/>
        </NextLink>
<ThemeSwitch/>

	);
};