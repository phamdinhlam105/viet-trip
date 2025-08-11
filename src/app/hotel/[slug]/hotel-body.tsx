import HotelMainInformation from "@/components/hotel-page/hotel-detail/hotel-main-infor";
import HotelRule from "@/components/hotel-page/hotel-detail/hotel-rule";
import HotelSidebarOffer from "@/components/hotel-page/hotel-detail/hotel-side-offer";
import OthersHotel from "@/components/hotel-page/hotel-detail/other-hotel";
import { HotelDetail } from "@/components/models/app-models";
import TourDetailGallery from "@/components/tourpage/tour-infor-page/tour-gallery";
import Link from "next/link";

export default function HotelDetailBody({
  currentHotel,
}: {
  currentHotel: HotelDetail;
}) {
  return (
    <div className="md:pt-28 pt-20">
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

          <h1 className="text-3xl font-bold mb-4">{currentHotel.name}</h1>
          <TourDetailGallery gallery={currentHotel.images} />
          <div className="md:hidden py-2">
            <HotelSidebarOffer {...currentHotel} />
          </div>
          <HotelMainInformation {...currentHotel} />
          <HotelRule rule={currentHotel.rule} />
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
    </div>
  );
}
