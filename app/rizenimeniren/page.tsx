import { title } from "@/components/primitives"
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";

export default function RizeniPage() {
	return (
                <div className="flex flex-col items-center mx-auto w-full">
                <div className="w-full flex flex-col items-center py-20 md:pb-32 border-b border-slate-200 dark:border-slate-700  bg-top bg-cover bg-no-repeat bg-melkor-pattern2 ">
                <h1 className={title()}>Řízení měníren</h1>
                <div className="flex flex-col items-center max-w-7xl px-6">
				<Card isBlurred className="my-20 px-6 py-10 dark:border dark:border-slate-700">
				<p className="text-left"> Dodáváme moduly pro dálkové i místní řízení měníren MHD, na kterých v současnosti běží řada měníren v několika městech. Své systémy stavíme na platformě MelkorVisum, o jejíchž výhodách si můžete přečíst <Link href={siteConfig.links.melkorvisum} > více zde</Link>. Níže se můžete podívat na podporované funkce a výhody oproti konkurenci.</p>
				</Card>
		
                </div>
                </div>
                </div>
        );
}