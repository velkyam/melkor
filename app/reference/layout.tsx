export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center w-full lg:bg-none bg-center bg-cover bg-no-repeat bg-melkor-pattern">
			<div className="text-center justify-center px-6 ">
				{children}
			</div>
		</section>
	);
}
