"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useState } from "react";
import { getPromotionBanner } from "../api/banner-api";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

type PromotionBanner = {
  name: string;
  image: string;
  slug: string;
};
export default function TopCarousel() {
  const [promotionBanner, setPromotionBanner] = useState<PromotionBanner[]>([]);

  useEffect(() => {
    const fecthBanner = async () => {
      const result = await getPromotionBanner();
      if (result) setPromotionBanner(result);
    };
    fecthBanner();
  }, []);

  return (
    <Carousel className="w-full py-5" plugins={[Autoplay({ delay: 3000 })]}>
      <CarouselContent className="w-full gap-4">
        {promotionBanner.map((item, idx) => (
          <CarouselItem className="basis-full md:basis-[32%] py-5" key={idx}>
            <div className="rounded-lg shadow-lg w-full">
              <Link
                  href={item.slug.startsWith("/") ? item.slug : `/${item.slug}`}
                className="relative w-full aspect-3/2 block"
              >
                <Image
                  title={item.name}
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg"
                  fill
                  unoptimized
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
