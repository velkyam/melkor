export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-20 w-full bg-center bg-cover bg-no-repeat bg-about-pattern">
<div className="inline-block max-w-7xl px-6 text-center justify-center">

				{children}
</div>
			
		</section>
	);
}
