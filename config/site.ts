export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Melkor Software",
	description: "Komplexní softwarová řešení na klíč..",
	navItems: [
    {
      label: "MelkorVisum",
      href: "/melkorvisum",
    },
    {
      label: "O nás",
      href: "/onas",
    },
    {
      label: "Reference",
      href: "/reference",
    },

	],
	navMenuItems: [
		{
			label: "Hlavní stránka",
			href: "/",
		},
		{
			label: "MelkorVisum",
			href: "/melkorvisum",
		  },
		  {
			label: "O nás",
			href: "/onas",
		  },
		  {
			  label: "Reference",
			  href: "/reference",
			},
			{
			 label: "Kontaktujte nás",
			 href: "/kontakt",
		   }, 

	],
	links: {
	main: "/",
	kontakt: "/kontakt",
	melkorvisum: "/melkorvisum",
	},
};
