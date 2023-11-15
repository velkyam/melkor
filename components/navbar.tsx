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
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";


import { Logo } from "@/components/icons";

export const Navbar = () => {

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	function closeMenu() {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">Melkor</p>
					</NextLink>
				</NavbarBrand>

			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>

				<ul className="hidden lg:flex gap-10 justify-start ml-2 mr-8">
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
				<Button color="secondary" as={Link} href={siteConfig.links.kontakt} radius="full" size="lg">
							Kontaktujte nás
						</Button>
				</NavbarItem>


				<ThemeSwitch />
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

				<ThemeSwitch />
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-auto flex flex-col gap-6 items-center ">
					{siteConfig.navMenuItems.map((item) => (
						<NavbarMenuItem key={item.href}>
							<Link
								color="foreground"
								href={item.href}
								size="lg"
								onPress={closeMenu}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
					<NavbarMenuItem>
						<Button color="secondary" as={Link} href={siteConfig.links.kontakt} onPress={closeMenu} radius="full" size="lg" variant="shadow">
							Kontaktujte nás
						</Button>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
