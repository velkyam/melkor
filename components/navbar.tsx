'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { MelkorLogo } from "@/components/icons";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";


export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	function closeMenu() {
		setIsMenuOpen(!isMenuOpen)
	}
	function closeMenmenuogo() {
		if(isMenuOpen)
			setIsMenuOpen(!isMenuOpen)
	}

	return (
		<NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} position="sticky" maxWidth="xl" className="top-0 left-0 shadow-sm dark:border-b border-slate-700 " >
			<NavbarContent className="basis-1/5 md:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/" onClick={closeMenmenuogo}>
						<MelkorLogo aria-label="Melkor_Software_logo" />
					</NextLink>
				</NavbarBrand>

			</NavbarContent>

			<NavbarContent
				className="hidden md:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="flex items-center">
					<ThemeSwitch className="mr-8" />
					
				</NavbarItem>

				<menu className="hidden md:flex gap-10 justify-start ml-2 mr-8">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
								scroll={false}


							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</menu>

				<NavbarItem>
					<Button color="secondary" className="bg-melkorPurple" as={Link} href={siteConfig.links.kontakt} radius="full" size="md">
						Kontaktujte nás
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="md:hidden"
				/>
			</NavbarContent>

			<NavbarMenu>
				<menu className="mx-auto flex flex-col gap-6 items-center ">
					<NavbarMenuItem>
						
						<ThemeSwitch className="mt-6" onClick={closeMenmenuogo}/>
					
					</NavbarMenuItem>
					{siteConfig.navMenuItems.map((item) => (
						<NavbarMenuItem key={item.href}>
							<Link
								color="foreground"
								href={item.href}
								size="lg"
								onClick={closeMenu}

							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}

				</menu>
			</NavbarMenu>
		</NextUINavbar>
	);
};
