"use client"
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import { getPromotionBanner } from "../api/banner-api";
import Autoplay from "embla-carousel-autoplay";


export default function TopCarousel() {
    const [promotionBanner,setPromotionBanner] = useState<string[]>([]);

    useEffect(()=>{
        const fecthBanner = async ()=>{
            const result = await getPromotionBanner();
            if(result)
                setPromotionBanner(result);
        }
        fecthBanner();
    },[])

    return <Carousel className="w-full py-5" 
    plugins={[
        Autoplay({delay:3000})
    ]}>
        <CarouselContent className="w-full gap-4">
            {promotionBanner.map((item,idx) =>
                <CarouselItem className="basis-full md:basis-[32%] py-5" key={idx}>
                    <div className="rounded-lg shadow-lg">
                        <div className="relative w-full aspect-[3/2]">
                            <Image
                               fill
                                src={item}
                                alt="carousel"
                                className="rounded-lg"
                            />
                        </div>

                    </div>
                </CarouselItem >
            )}
        </CarouselContent>
    </Carousel>
}