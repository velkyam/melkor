'use client'
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Typewriter from 'typewriter-effect';


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{/* hero row div */}
			<div className="flex flex-row justify-between">

				<div className="inline-block max-w-lg justify-center">
					<h1 className={title()}>
						Moderní řešení pro
						<Typewriter
							options={{
								strings: ['průmyslové', 'energetické', 'dopravní', 'obchodní'],
								autoStart: true,
								loop: true,
							}}
						/>
						systémy.

					</h1>


					<h2 className={subtitle({ class: "mt-4" })}>
						Nabízíme komplexní softwarová řešení na
						klíč. Prostřednictvím našich špičkových SCADA systémů Vám můžeme usnadnit řízení
						provozu a zvýšit jeho efektivitu.
					</h2>
					<Link
						href={siteConfig.links.melkorvisum}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						Více o našem řešení
					</Link>
				</div>
				<div className="inline-block max-w-lg justify-center">

				</div>

			</div>

		</section>

	);
}
