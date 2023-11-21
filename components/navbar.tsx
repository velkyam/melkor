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
import { button as buttonStyles } from "@nextui-org/theme";
import React from "react";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { MelkorLogo} from "@/components/icons";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	function closeMenu() {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl" position="sticky" className="shadow-sm dark:border-b border-slate-700">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<MelkorLogo />
					</NextLink>
				</NavbarBrand>

			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem>
				<ThemeSwitch className="mr-8" />
				</NavbarItem>

				<ul className="hidden md:flex gap-10 justify-start ml-2 mr-8">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>

				<NavbarItem>
					<Button color="secondary" className="bg-melkorPurple" as={Link} href={siteConfig.links.kontakt} radius="full" size="md">
						Kontaktujte nás
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

				
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-auto flex flex-col gap-6 items-center ">
			<NavbarMenuItem>
					<ThemeSwitch className="mt-6"/>
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
				{/* 	<NavbarMenuItem>
						<Link color="secondary" className={buttonStyles({ variant: "bordered", radius: "full" })} href={siteConfig.links.kontakt} onPress={closeMenu} radius="full" size="lg" >
							Kontaktujte nás
						</Link>
					</NavbarMenuItem> */}

				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
