export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center w-full ">
<div className="max-w-7xl px-6 text-center justify-center">

				{children}
</div>
			
		</section>
	);
}
