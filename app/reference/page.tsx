import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { GetStarted } from "@/components/get-started";

export default function ReferencePage() {
	return (
		<div>
			{/* Our successes */}
			<div className="flex flex-col w-full max-w-7xl items-center py-20 md:pb-32 border-b border-slate-200 dark:border-slate-700">
				<div className={title({ class: "mb-20", size: "lg" })}>Reference</div>
				<div className="flex flex-col md:grid grid-rows-1 grid-cols-3 gap-12">
					<Card isBlurred className="px-6 py-10 dark:border dark:border-slate-700">
						<CardHeader className="flex">
							<h4 className="font-semibold text-large text-left">Energetický dispečink Dopravní společnosti Zlín a Otrokovice</h4>
						</CardHeader>
						<CardBody>
							<p>Na naší technologii běží dispečink, který má na starosti napájení trolejbusů v celém Zlíně a Otrokovicích. Zajišťujeme nepřetržitý provoz deseti měníren a jejich místní i dálkové řízení, které jsme dodali v rámci dvou zakázek ve spolupráci s firmou OHLA ŽS.</p>
						</CardBody>
					</Card>
					<Card isBlurred className=" px-6 py-10 dark:border dark:border-slate-700">
						<CardHeader className="flex">
							<h4 className="font-semibold text-large text-left">Místní řízení měnírny Heršpice a transformátorové stanice Slatina		</h4>			</CardHeader>
						<CardBody>
						<p>Pro Dopravní podnik města Brna jsme dodali modernizovaný řídicí systém, který ovládá stávající technologii. Abychom zajistili plynulé pokračování obsluhy, celý systém byl navržen tak, aby (krom použití moderní techniky) přesně odpovídal řízení předešlému.</p>
						</CardBody>
					</Card>
					<Card isBlurred className=" px-6 py-10 dark:border dark:border-slate-700">
						<CardHeader className="flex">
							<h4 className="font-semibold text-large text-left">Dálkové řízení vytápění Orlovny Brno-Obřany	</h4>				</CardHeader>
						<CardBody>
							<p>
								Pro jednotu Orla Brno-Obřany jsme rozšířili existující řízení kotelny o soustavu bezdrátových snímačů teploty a webové rozhraní, které umožňuje sledování teploty, vzdálené ovládání kotlů i plánování automatického vytápění.</p>
						</CardBody>
					</Card>
				</div>
			</div>
			{/* Get started */}
			<GetStarted />
		</div>
	);
}
