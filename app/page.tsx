'use client'
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Typewriter from 'typewriter-effect';
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { card } from "@nextui-org/theme";
import card1 from "./assets/trakcni2.png"


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center  ">
			{/* hero row div */}
			<div className="flex justify-center bg-center bg-cover bg-no-repeat bg-hero-pattern shadow-sm w-full py-6 md:py-16 pb-24"  >
				<div className="flex flex-col-reverse justify-between w-full max-w-7xl px-6 md:flex-row"  >
					<div className="inline-block max-w-md space-y-10 ">
						<div className={title({ size: "lg" })}>
							<div className="py-2">
								Moderní řešení pro
							</div>
							<Typewriter
								options={{
									strings: ['průmyslové', 'energetické', 'dopravní', 'obchodní'],
									autoStart: true,
									loop: true,
									wrapperClassName: title({ color: "purple" }),
								}}
							/>
							<div className="py-2">

								systémy.
							</div>
						</div>
						<h2 className={subtitle({ class: "mt-4", backdrop: "blur" })}>
							Nabízíme komplexní softwarová řešení na
							klíč. Prostřednictvím našich špičkových SCADA systémů Vám můžeme usnadnit řízení
							provozu a zvýšit jeho efektivitu.
						</h2>
						<Button color="primary" className="bg-melkorPurple" as={Link} href={siteConfig.links.kontakt} radius="full" size="lg">
							Více o našem řešení
						</Button>
					</div>
					<div className="inline-block max-w-2xl pb-10">
						<video autoPlay loop muted playsInline poster="/poster.jpg" src={"/Untitled.mp4"} />
					</div>

				</div>
			</div>
			<div className="container flex flex-col items-center  w-full max-w-7xl px-6 py-6 md:py-32 pb-24 space-y-10">
				<h1 className={title({ size: "lg" })}>MelkorVisum</h1>
				<h2 className={subtitle({ class: "mt-4 text-center" })}>Našim hlavním produktem je plně přizpůsobitelná a integrovaná platforma MelkorVisum, která nám umožňuje efektivně vyvíjet vysoce spolehlivé vizualizační a řídicí systémy pro průmyslové, energetické či dopravní provozy.</h2>
				{/* card row */}
				<div className="flex w-ful flex-row">
			    
				</div>
			</div>
		</section>

	);
}
