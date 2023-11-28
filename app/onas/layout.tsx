export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-centerw-full bg-top bg-cover bg-no-repeat bg-about-pattern">
<div className="max-w-7xl px-6 text-center justify-center">

				{children}
</div>
			
		</section>
	);
}
