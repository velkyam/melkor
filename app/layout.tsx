import "@/styles/globals.css";
import 'lightbox.js-react/dist/index.css'
import '@splidejs/react-splide/css';
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import Script from "next/script";
import { Footer } from "@/components/footer";


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
		icon: "/favicons/favicon.ico",
		shortcut: "/favicons/favicon-16x16.png",
		apple: "favicons/apple-touch-icon.png",
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
					"min-h-screen bg-background font-sans antialiased overflow-y-scroll", 
					fontSans.variable
				)}
			 >
				<Providers themeProps={{ attribute: "class", defaultTheme:"system"  }}>
					
				<div className="relative flex flex-col h-fit">

						<Navbar />
						<main>
							{children}
						</main>
						<Footer/>
				</div>
					
				</Providers>
				{/* Fontawesome Icons */}
				<Script src="https://kit.fontawesome.com/7f5487acc3.js"></Script>
			</body>
		</html>
	);
}
