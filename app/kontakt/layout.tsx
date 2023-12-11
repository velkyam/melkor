export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center">
					<div className="flex flex-col items-center justify-center w-full lg:bg-none bg-center bg-cover bg-no-repeat bg-contact-pattern">

				{children}
				</div>
		</section>
	);
}
