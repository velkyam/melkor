export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 my-20">
			<div className="inline-block px-6 text-center justify-center">
				{children}
			</div>
		</section>
	);
}
