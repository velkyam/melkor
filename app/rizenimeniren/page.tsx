'use client'
import { title } from "@/components/primitives"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { Image as LightImage } from "lightbox.js-react"
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { GetStarted } from "@/components/get-started";

const card1 = [
    {
        src: '/1_1.webp',
        alt: 'melkorvisum_zobrazeni'
    },
    {
        src: '/1_2.webp',
        alt: 'melkorvisum_zobrazeni'
    }
]
const card3 = [
    {
        src: '/3_1.webp',
        alt: 'melkorvisum_zobrazeni',

    },
    {
        src: '/3_2.webp',
        alt: 'melkorvisum_zobrazeni',

    },
]
const card5 = [
    {
        src: '/5_1.webp',
        alt: 'melkorvisum_zobrazeni',

    },
    {
        src: '/5_2.webp',
        alt: 'melkorvisum_zobrazeni',

    },
    {
        src: '/5_3.webp',
        alt: 'melkorvisum_zobrazeni',

    },
    {
        src: '/5_4.webp',
        alt: 'melkorvisum_zobrazeni',

    },
]
const card8 = [
    {
        src: '/8_2.webp',
        alt: 'denik_1',

    },
    {
        src: '/8_3.webp',
        alt: 'melkorvisum_zobrazeni',

    },
    
]



export default function RizeniPage() {
    let [isOpen1, setIsOpen1] = useState(false);
    let [isOpen2, setIsOpen2] = useState(false);
    let [isOpen3, setIsOpen3] = useState(false);
    let [isOpen4, setIsOpen4] = useState(false);

    let [startingIndex, setStartingIndex] = useState(0);

    useEffect(() => {
        initLightboxJS("9C64-9D7D-1161-2794", "Individual");
    });

    return (
        <div className="flex flex-col items-center mx-auto w-full ">
            <div className="w-full flex flex-col items-center pt-20">
                <h1 className={title()}>Řízení měníren</h1>
                <div className="flex flex-col items-center max-w-7xl lg:px-6">
                    <Card shadow="sm" isBlurred className="mt-20 px-6 py-10 dark:border dark:border-slate-700">
                        <p className="text-left"> Dodáváme moduly pro dálkové i místní řízení měníren MHD, na kterých v současnosti běží řada měníren v několika městech. Své systémy stavíme na platformě MelkorVisum, o jejíchž výhodách si můžete přečíst <Link href={siteConfig.links.melkorvisum} > více zde</Link>. Níže se můžete podívat na podporované funkce a výhody oproti konkurenci.</p>
                    </Card>

                </div>
    
            <div className="flex flex-col w-full max-w-7xl lg:px-6 space-y-4 py-20 md:pb-32 md:space-y-0 md:grid grid-cols-3 gap-12 lg:gap-16 border-b border-slate-200 dark:border-slate-700 ">


                       
                <Card shadow="sm" radius="sm">
                    <SlideshowLightbox
                        theme="lightbox"
                        modalClose="clickOutside"
                        open={isOpen1}
                        startingSlideIndex={startingIndex}
                        images={card1}
                        showThumbnails={true}
                        onClose={() => setIsOpen1(false)}
                        lightboxIdentifier="lbox1"
                        showThumbnailIcon={false}
                        showFullScreenIcon={false}
                        showSlideshowIcon={false}
                    >
                    </SlideshowLightbox>

                    <Splide className="h-60" options={{
                        type: 'loop',
                        perPage: 1,
                        autoplay: true,
                        pauseOnHover: true,
                        gap: "1rem",
                        speed: 600,
                        interval: 7000,
                        pagination: false,
                    }}
                        aria-label="Schématické zobrazení technologie">
                        <SplideSlide>
                            <Link className="object-cover w-full flex" onClick={() => { setIsOpen1(true); setStartingIndex(0) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="w-full object-cover h-60 " radius="none" src="/1_1.webp" />
                            </Link>
                        </SplideSlide>
                        <SplideSlide>
                            <Link className="object-cover w-full flex" onClick={() => { setIsOpen1(true); setStartingIndex(1) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="w-full object-cover h-60 " radius="none" src="/1_2.webp" />
                            </Link>
                        </SplideSlide>
                    </Splide>
                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Schématické zobrazení technologie</h4>
                        <p className="text-base">Zachycuje stav prvků v reálném čase, přítomnost napětí na vodičích apod.</p>
                    </CardBody>
                </Card>
       
                <Card shadow="sm" radius="sm">
                    <LightImage modalClose="clickOutside" image={{ src: "/2_1.webp" }} removeWrapper className="w-full object-cover h-60 " radius="none" />
                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Schéma trakční sítě</h4>
                        <p className="text-base">Zobrazení všech měníren a napájených úseků</p>
                    </CardBody>
                </Card>
     

                <Card shadow="sm" radius="sm">
                    <SlideshowLightbox
                        theme="lightbox"
                        modalClose="clickOutside"
                        open={isOpen2}
                        startingSlideIndex={startingIndex}
                        images={card3}
                        showThumbnails={true}
                        onClose={() => setIsOpen2(false)}
                        lightboxIdentifier="lbox1"
                        showThumbnailIcon={false}
                        showFullScreenIcon={false}
                        showSlideshowIcon={false}
                    >
                    </SlideshowLightbox>

                    <Splide className="h-60" options={{
                        type: 'loop',
                        perPage: 1,
                        autoplay: true,
                        pauseOnHover: true,
                        gap: "1rem",
                        speed: 600,
                        interval: 7000,
                        height: '24rem',
                        pagination: false,


                    }}
                        >
                        <SplideSlide>
                            <Link className="object-cover w-full flex" onClick={() => { setIsOpen2(true); setStartingIndex(0) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="w-full object-cover h-60 " radius="none" src="/3_1.webp" />
                            </Link>
                        </SplideSlide>
                        <SplideSlide >
                            <Link className="object-cover" onClick={() => { setIsOpen2(true); setStartingIndex(1) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="w-full object-cover h-60 " radius="none" src="/3_2.webp" />
                            </Link>
                        </SplideSlide>
                    </Splide>
                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Zobrazení deníku událostí</h4>
                        <p className="text-base">Podporuje generování alarmů i dalších událostí, kvitace, podrobné filtrování i vyhledávání v historických datech</p>
                    </CardBody>
                </Card>

                <Card shadow="sm" radius="sm">
                    <LightImage modalClose="clickOutside" image={{ src: "/4_1.webp" }} removeWrapper className="w-full object-cover h-60 " radius="none" />
                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Detaily jednotlivých prvků</h4>
                        <p className="text-base">Obsahují detailní informace o stavu, meřené hodnoty, povely k odeslání atd.</p>
                    </CardBody>
                </Card>

                <Card shadow="sm" radius="sm">
                    <SlideshowLightbox
                        theme="lightbox"
                        modalClose="clickOutside"
                        open={isOpen3}
                        startingSlideIndex={startingIndex}
                        images={card5}
                        showThumbnails={true}
                        onClose={() => setIsOpen3(false)}
                        lightboxIdentifier="lbox1"
                        showThumbnailIcon={false}
                        showFullScreenIcon={false}
                        showSlideshowIcon={false}
                        
                    >
                    </SlideshowLightbox>

                    <Splide className="h-60" options={{
                        type: 'loop',
                        perPage: 1,
                        autoplay: true,
                        pauseOnHover: true,
                        gap: "1rem",
                        speed: 600,
                        interval: 7000,
                        width: '100%',
                        pagination: false,


                    }}
                        >
                        <SplideSlide>
                            <Link className="object-cover w-full flex" onClick={() => { setIsOpen3(true); setStartingIndex(0) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="object-cover h-60  w-full" radius="none" src="/5_1.webp" />
                            </Link>
                        </SplideSlide>
                        <SplideSlide >
                            <Link className="object-cover w-full flex" onClick={() => { setIsOpen3(true); setStartingIndex(1) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="w-full object-cover h-60 " radius="none" src="/5_2.webp" />
                            </Link>
                        </SplideSlide>
                        <SplideSlide >
                            <Link className="object-cover w-full flex" onClick={() => { setIsOpen3(true); setStartingIndex(2) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="w-full object-cover h-60 " radius="none" src="/5_3.webp" />
                            </Link>
                        </SplideSlide>
                        <SplideSlide >
                            <Link className="object-cover w-full" onClick={() => { setIsOpen3(true); setStartingIndex(3) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="w-full object-cover h-60 " radius="none" src="/5_4.webp" />
                            </Link>
                        </SplideSlide>
                    </Splide>
                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Stejné zobrazení pro místní řízení i dálkové ovládání</h4>
                        <p className="text-base">Usnadňuje komunikaci mezi servisem a dispečinkem</p>
                    </CardBody>
                </Card>

                <Card shadow="sm" radius="sm">
                    <LightImage modalClose="clickOutside" image={{ src: "/6_1.webp" }} removeWrapper className="w-full object-cover h-60 " radius="none" />
                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Dynamické rozložení obsahu</h4>
                        <p className="text-base">Aplikaci lze rozložit do libovolného počtu oken různé velikosti</p>
                    </CardBody>
                </Card>

                <Card shadow="sm" radius="sm">
                    <LightImage modalClose="clickOutside" image={{ src: "/7_2.webp" }} removeWrapper className="w-full object-cover h-60 " radius="none" />
                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Jednoduchá integrace se stávajícími technologiemi</h4>
                        <p className="text-base">Do technologie přidáno jediné PLC</p>
                    </CardBody>
                </Card>

                <Card shadow="sm" radius="sm">
                    <SlideshowLightbox
                        theme="lightbox"
                        modalClose="clickOutside"
                        open={isOpen4}
                        startingSlideIndex={startingIndex}
                        images={card8}
                        showThumbnails={true}
                        onClose={() => setIsOpen4(false)}
                        lightboxIdentifier="lbox1"
                        showThumbnailIcon={false}
                        showFullScreenIcon={false}
                        showSlideshowIcon={false}
                        
                    >
                    </SlideshowLightbox>

                    <Splide className="h-60" options={{
                        type: 'loop',
                        perPage: 1,
                        autoplay: true,
                        pauseOnHover: true,
                        gap: "1rem",
                        speed: 600,
                        interval: 7000,
                        height: '24rem',
                        width: '100%',
                        pagination: false,


                    }}
                        >
                        <SplideSlide>
                            <Link className="object-cover w-full flex" onClick={() => { setIsOpen4(true); setStartingIndex(0) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="object-cover object-left h-60  w-full" radius="none" src="/8_2.webp" />
                            </Link>
                        </SplideSlide>
                        <SplideSlide >
                            <Link className="object-cover w-full flex" onClick={() => { setIsOpen4(true); setStartingIndex(1) }}>
                                <Image alt="melkorvisum_zobrazeni" removeWrapper className="w-full object-cover h-60 " radius="none" src="/8_3.webp" />
                            </Link>
                        </SplideSlide>
                    </Splide>

                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Přehled komponent a jejich stavu</h4>
                        <p className="text-base"></p>
                    </CardBody>
                </Card>
                <Card shadow="sm" radius="sm">
                    <LightImage modalClose="clickOutside" image={{ src: "/9_1.webp" }} removeWrapper className="w-full object-cover h-60 " radius="none" />
                    <CardBody className="flex flex-col py-10 px-6 space-y-2 items-start text-left border-t dark:border-slate-700 border-slate-200">
                        <h4 className="font-semibold text-lg">Energetické limity</h4>
                        <p className="text-base">Zobrazuje rozložení spotřeby a hlídá překročení nastavených limitů</p>
                    </CardBody>
                </Card>
                </div>
            <GetStarted />
            </div>
        </div>
    );
}