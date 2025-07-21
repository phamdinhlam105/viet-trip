"use client";
import { getTourBySlug } from "@/components/api/tour-api";
import { TourDetail } from "@/components/models/app-models";
import TourMainInformation from "@/components/tourpage/tour-infor-page/main-infor";
import NoticeInformation from "@/components/tourpage/tour-infor-page/notice-infor";
import RelatedTour from "@/components/tourpage/tour-infor-page/related-tour";
import TourDetailGallery from "@/components/tourpage/tour-infor-page/tour-gallery";
import TourSchedule from "@/components/tourpage/tour-infor-page/tour-schedule";
import TourSidebarOffer from "@/components/tourpage/tour-infor-page/tour-side-offer";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TourDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [currentTour, setCurrentTour] = useState<TourDetail>({
    id: "",
    name: "",
    slug: "",
    description: "",
    schedule: "",
    scheduleDetail: "",
    price: "",
    thumbnail: "",
    images: [],
    startingPlace: "",
    tourDetail: {
      id: "",
      location: "",
      suitablePerson: "",
      idealTime: "",
      transportation: "",
      promotion: "",
      food: "",
    },
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async (slug: string) => {
      const tours = await getTourBySlug(slug);
      if (tours) {
        setCurrentTour(tours);
        setIsLoading(false);
      } else return notFound();
    };

    fetchTours(slug);
  }, [slug]);
  return (
    <div className="md:px-[10%] md:pt-28 pt-20">
      <div className="px-2 py-10 md:flex space-x-4">
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
              href="/tour"
            >
              Tour Nha Trang
            </Link>
            <span>/</span>
            <p>{currentTour.name}</p>
          </div>
          {isLoading ? (
            "Đang tải dữ liệu"
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">{currentTour.name}</h1>
              <TourDetailGallery gallery={currentTour.images} />
              <div className="md:hidden py-2">
                <TourSidebarOffer {...currentTour} />
              </div>
              <TourMainInformation
                description={currentTour.description}
                {...currentTour.tourDetail}
              />
              <TourSchedule
                schedule={currentTour.schedule}
                scheduleDetail={currentTour.scheduleDetail}
              />
              <NoticeInformation />
            </>
          )}
        </div>
        <div className="md:w-1/4 md:relative sm:block hidden">
          <TourSidebarOffer id={currentTour.id} price={currentTour.price} />
        </div>
      </div>
      <RelatedTour id={currentTour.id} />
    </div>
  );
}
