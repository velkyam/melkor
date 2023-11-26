export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center ">
					<div className="flex flex-col items-center justify-center w-full">

				{children}
				</div>
		</section>
	);
}
