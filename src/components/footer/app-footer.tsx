"use client";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useState } from "react";
import { Post, Tour } from "../models/app-models";
import { getAllTour } from "../api/tour-api";
import { getAllPost } from "../api/post-api";

const COOP = [
  {
    id: 1,
    src: "/homepage/coop/vinpearl.png",
    alt: "Vinpearl",
  },
  {
    id: 2,
    src: "/homepage/coop/tu-hai.png",
    alt: "Tứ Hải",
  },
  {
    id: 3,
    src: "/homepage/coop/long-phu.png",
    alt: "Phong Phú",
  },
  {
    id: 4,
    src: "/homepage/coop/sanest.png",
    alt: "Sanest",
  },
  {
    id: 5,
    src: "/homepage/coop/hai-phong.png",
    alt: "Hải Phòng",
  },
  {
    id: 6,
    src: "/homepage/coop/resort.png",
    alt: "Resort",
  },
];

export default function AppFooter() {
  const [hotTour, setHotTour] = useState<Tour[]>([]);
  const [recentNews, setRecentNews] = useState<Post[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const fetchTour = async () => {
    const result = await getAllTour();
    if (result) {
      setHotTour(result);
    }
  };
  const fetchPost = async () => {
    const result = await getAllPost();
    if (result) setRecentNews(result);
  };
  useEffect(() => {
    fetchTour();
    fetchPost();
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="text-white bg-black space-y-2">
      <div
        style={{
          backgroundImage: 'url("/homepage/footer-background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className="justify-self-center justify-items-center py-10 space-y-4 w-full"
      >
        <h3 className="text-xl font-bold">Đối Tác Thân Thiết</h3>
        <div className=" my-3 w-[250px] bg-white h-[4px]"></div>
        <p className="md:text-lg text-sm text-center font-semibold">
          Đối Tác Chúng Tôi Bao Gồm Các Công Ty Du Lịch, Lữ Hành, Khách Sạn...
        </p>
        {!isMobile ? (
          <div className="grid grid-cols-6 gap-4 justify-center px-2 hidden sm:grid">
            {COOP.map((item) => (
              <Image
                key={item.id}
                title={item.alt}
                src={item.src}
                alt={item.alt}
                width={100}
                height={100}
              />
            ))}
          </div>
        ) : (
          <Carousel className="w-full py-5 sm:hidden">
            <CarouselContent className="flex">
              {COOP.map((item) => (
                <CarouselItem key={item.id} className="basis-1/3 px-2">
                  <div className="relative w-full aspect-[3/2]">
                    <Image src={item.src} alt={item.alt} fill />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
      <div className="md:px-20 px-2 py-5 space-y-5">
        <div className="md:grid md:grid-cols-3 space-y-6">
          <div className="px-2">
            <h3 className="font-bold text-lg md:leading-12">
              Về Chúng Tôi <br />
              Công ty TNHH Lữ Hành Quốc Tế Viet Trip
            </h3>
            <p className="md:leading-12 leading-8">
              135/8 Nguyễn Thái Học, Nha Trang, Khánh Hoà
              <br />
              091 494 3366 - 084 246 6868
              <br />
              viettriptour79@gmail.com
              <br />
              www.viettriptourist.com
              <br />
              Khám Phá. Trải Nghiệm. Tận hưởng.
              <br />
              Viet Trip Tourist - Your Journey, Our Passion!
              <br />
              135/8 Nguyễn Thái Học, TP. Nha Trang, Khánh Hoà
              <br />
              <span>
                <Link className="hover:underline" href={`/policy`}>
                  Chính sách riêng tư
                </Link>
              </span>
            </p>
            <div className="flex space-x-4">
              <Link href={`https://www.facebook.com/VietTripTour`}>
                <Facebook />
              </Link>
              <Link
                href={`https://www.instagram.com/explore/locations/999947336875601/viet-trip-tourist/`}
              >
                <Instagram />
              </Link>
              <Link href={`https://www.youtube.com/@Khuongxoaichanel`}>
                <Youtube />
              </Link>
            </div>
          </div>
          <div className="md:space-y-4 space-y-1 px-2 flex flex-col">
            <h3 className="font-bold text-lg py-2">Tour Nổi Bật</h3>
            {hotTour.slice(0, 5).map((item) => (
              <a key={item.id} href={`/tour/${item.slug}`} className="truncate">
                {item.name}
              </a>
            ))}
          </div>
          <div className="space-y-4 px-2 w-full">
            <h3 className="font-bold text-lg">Tin Tức Mới Nhất</h3>
            {recentNews.slice(0, 5).map((item, idx) => (
              <div key={idx} className="w-full">
                <Link href={`/tin-tuc/${item.slug}`} className="w-full flex">
                  <div className="relative w-1/3 aspect-[2/1]">
                    <Image src={item.thumbnail} alt={"Tin tức mới nhất"} fill />
                  </div>
                  <div className="w-2/3 content-center px-2">
                    <h3 className="text-lg font-semibold truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm truncate">
                      {new Date(item.updatedAt).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-bold">Chứng Nhận:</span>
          <Link href="http://online.gov.vn/Website/chi-tiet-134657?AspxAutoDetectCookieSupport=1">
            <Image
              src={"/homepage/bocongthuong.png"}
              alt="Chứng nhận bộ công thương"
              width={100}
              height={100}
              unoptimized
            />
          </Link>
        </div>
      </div>

      <div className="text-center bg-[#313131] md:text-lg text-xs">
        Copyright 2025 Công ty TNHH Lữ Hành Quốc Tế Việt Trip. Thiết kế bởi{" "}
        <span className="font-bold underline text-red-700">C/H Solutions</span>
      </div>
    </div>
  );
}
