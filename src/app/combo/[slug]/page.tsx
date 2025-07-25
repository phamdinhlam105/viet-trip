"use client";
import { getComboBySlug } from "@/components/api/combo-api";
import ComboSidebarOffer from "@/components/combo-page/combo-offer";
import ComboHotelInfor from "@/components/combo-page/hotel-infor";
import OthersCombo from "@/components/combo-page/other-combo";
import { ComboDetail } from "@/components/models/app-models";
import TourDetailGallery from "@/components/tourpage/tour-infor-page/tour-gallery";
import TourSchedule from "@/components/tourpage/tour-infor-page/tour-schedule";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ComboDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [currentCombo, setCurrentCombo] = useState<ComboDetail>();
  const [gallery, setGallery] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (slug: string) => {
      const result = await getComboBySlug(slug);
      if (result) {
        setCurrentCombo(result);
        setIsLoading(false);
      } else return notFound();
    };
    fetchData(slug);
  }, [slug]);
  useEffect(() => {
    if (currentCombo) {
      const hotelImages = currentCombo?.hotel?.images ?? [];
      const tourImages = currentCombo?.tour?.images ?? [];
      setGallery([...hotelImages, ...tourImages]);
    }
  }, [currentCombo]);
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
                  href="/Combo"
                >
                  Combo
                </Link>
                <span>/</span>
                <p>{currentCombo?.name}</p>
              </div>
              {isLoading ? (
                "Đang tải dữ liệu"
              ) : (
                <>
                  <TourDetailGallery gallery={gallery} />
                  <TourSchedule
                    schedule={currentCombo?.tour.schedule ?? ""}
                    scheduleDetail={currentCombo?.tour.scheduleDetail ?? ""}
                  />
                  <ComboHotelInfor
                    name={currentCombo?.hotel.name ?? ""}
                    description={currentCombo?.hotel.description ?? ""}
                    ultilities={currentCombo?.hotel.ultilities ?? ""}
                    star={currentCombo?.hotel.star ?? 4}
                    address={currentCombo?.hotel.address ?? ""}
                  />
                </>
              )}
            </div>
            <div className="md:w-1/4 md:relative sm:block hidden">
              <ComboSidebarOffer
                hotelName={currentCombo?.hotel.name}
                schedule={currentCombo?.tour.schedule}
                price={currentCombo?.price ?? ""}
                id={currentCombo?.id ?? ""}
              />
            </div>
          </div>
          <OthersCombo id={currentCombo?.id ?? ""} />
        </>
      )}
    </div>
  );
}
