"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useState } from "react";
import { getTopBanner } from "../api/banner-api";
import Autoplay from "embla-carousel-autoplay";

type TopBanner = {
  name: string;
  image: string;
  responsiveImage: string;
};

export default function HomePageBanner() {
  const [banner, setBanner] = useState<TopBanner[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const fetchBanner = async () => {
    const result = await getTopBanner();
    if (result) setBanner(result);
  };
  useEffect(() => {
    fetchBanner();
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <div className="w-full">
      <h1 className="sr-only">
        Viettrip Tourist - Tour du lịch chuyên nghiệp toàn quốc
      </h1>
      <Carousel
        className="w-full p-0"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="w-full p-0 m-0">
          {banner?.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="relative w-full md:aspect-3/1 aspect-1/1"
            >
              <Image
                fill
                src={isMobile ? item.responsiveImage : item.image}
                alt={item.name}
                unoptimized
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
