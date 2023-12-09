export default function RizeniLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center px-6">
	
				{children}
			
		</section>
	);
}
