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
			<div className="flex justify-center bg-center bg-cover bg-no-repeat bg-hero-pattern dark:border-b border-slate-700 shadow-sm w-full py-6 md:py-16 pb-24"  >
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


			<div className="container flex flex-col items-center  w-full max-w-7xl px-6 py-20 md:py-32 ">
				<h1 className={title({ class: "mb-10", size: "lg" })}>MelkorVisum</h1>
				<h2 className={subtitle({ class: "mb-20 text-center w-full md:max-w-5xl" })}>Našim hlavním produktem je plně přizpůsobitelná a integrovaná platforma MelkorVisum, která nám umožňuje efektivně vyvíjet vysoce spolehlivé vizualizační a řídicí systémy pro průmyslové, energetické či dopravní provozy.</h2>
				{/* card row */}
				<div className="flex flex-col w-full items-center justify-between max-w-5xl space-y-10 md:flex-row md:space-y-0">
							<Card isBlurred className=" w-full mx-4 dark:border">
					
					<Image
					 removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover"
						src="/nerd.jpeg"
						radius="none"
					/>
			
				<CardFooter className="flex flex-col py-12 space-y-10 justify-center">
							<h4 className="font-bold text-large text-center">Kompletní softwarová<br />řešení na klíč</h4>
					<Link href="/melkorvisum">
						Více o MelkorVisu
					</Link>
				</CardFooter>
			</Card>

					<Card isBlurred className=" w-full mx-4 dark:border">
					
							<Image
							 removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="/preview.jpeg"
								radius="none"
							/>
					
						<CardFooter className="flex flex-col py-12 space-y-10 justify-center">
							<h4 className="font-bold text-large text-center">Integrace se <br />stávajícími technologiemi</h4>
							<Link href="/melkorvisum">
								Více o MelkorVisu
							</Link>
						</CardFooter>
					</Card>

					<Card isBlurred className=" w-full mx-4 dark:border">
					
							<Image
							 removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="/vzhled.jpeg"
						
								radius="none"
							/>
					
						<CardFooter className="flex flex-col py-12 space-y-10 justify-center">
							<h4 className="font-bold text-large text-center">Moderní vzhled <br />přizpůsobený na míru</h4>
							<Link href="/melkorvisum">
								Více o MelkorVisu
							</Link>
						</CardFooter>
					</Card>

			
				</div>

				{/* One Platform row */}
			
				<div className="flex flex-col md:flex-row w-full justify-between max-w-7xl  py-20 md:py-32">
					<div className="flex-col space-y-10 max-w-lg">

					<div className={title({size: "lg"})}>
						<div className="py-2">
							Jedna platforma,
						</div>
						<div className="py-2">
							tisíce možností.
						</div>
					</div>
					<h2 className={subtitle({  })}>
					Ať už potřebujete renovovat energetický dispečink, automatizovat výrobní linku či modernizovat přehled nad spotřebou energií, Melkor Software Vám poskytne spolehlivé řešení s maximální flexibilitou a kontrolou.
					</h2>
					</div>
					<Image className="w-full max-w-xl mt-10 md:mt-0"
								alt="Card background"
								src="/display2.jpg"
								
								
							/>
				</div>
			</div>
		</section>

	);
}
