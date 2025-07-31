"use client";
import { getHotelBySlug } from "@/components/api/hotel-api";
import HotelMainInformation from "@/components/hotel-page/hotel-detail/hotel-main-infor";
import HotelRule from "@/components/hotel-page/hotel-detail/hotel-rule";
import HotelSidebarOffer from "@/components/hotel-page/hotel-detail/hotel-side-offer";
import OthersHotel from "@/components/hotel-page/hotel-detail/other-hotel";
import { HotelDetail } from "@/components/models/app-models";
import TourDetailGallery from "@/components/tourpage/tour-infor-page/tour-gallery";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HotelDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const [currentHotel, setCurrentHotel] = useState<HotelDetail>({
    id: "",
    name: "",
    slug: "",
    address: "",
    star: 4,
    description: "",
    content: "",
    ultilities: "",
    price: "",
    thumbnail: "",
    images: [],
    rule: "",
    roomDetails: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (slug: string) => {
      const result = await getHotelBySlug(slug);
      if (result) {
        setCurrentHotel(result);
        setIsLoading(false);
      } else router.push("/404");
    };
    fetchData(slug);
  }, [slug]);

  return (
    <div className="md:pt-28 pt-20">
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <>
          <div className="md:px-[10%] px-2 py-5 md:flex space-x-4">
            <div className="md:w-3/4 w-full">
              <div className="md:flex block space-x-2 pb-4">
                <Link
                  className="hover:underline hover:text-blue-400 hover:font-semibold"
                  href="/"
                >
                  Trang chủ{" "}
                </Link>
                <span>/</span>
                <Link
                  className="hover:underline hover:text-blue-400 hover:font-semibold"
                  href="/hotel"
                >
                  Khách sạn
                </Link>
                <span>/</span>
                <p>{currentHotel.name}</p>
              </div>
              {isLoading ? (
                "Đang tải dữ liệu"
              ) : (
                <>
                  <h1 className="text-3xl font-bold mb-4">
                    {currentHotel.name}
                  </h1>
                  <TourDetailGallery gallery={currentHotel.images} />
                  <div className="md:hidden py-2">
                    <HotelSidebarOffer {...currentHotel} />
                  </div>
                  <HotelMainInformation {...currentHotel} />
                  <HotelRule rule={currentHotel.rule} />
                </>
              )}
            </div>
            <div className="md:w-1/4 md:relative sm:block hidden">
              <HotelSidebarOffer
                price={currentHotel.price}
                id={currentHotel.id}
                description={currentHotel.description}
              />
            </div>
          </div>
          <OthersHotel id={currentHotel.id} />
        </>
      )}
    </div>
  );
}
