import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import NextLink from "next/link";
import { MelkorLogo } from "@/components/icons";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Script from "next/script";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-hrefuch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main>
							{children}
						</main>
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
										<li>
											<Link className="md:mr-10 text-default-600" href='/reference'>Reference</Link>
										</li>
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
					</div>
				</Providers>
				{/* Fontawesome Icons */}
				<Script src="https://kit.fontawesome.com/7f5487acc3.js"></Script>
			</body>
		</html>
	);
}
