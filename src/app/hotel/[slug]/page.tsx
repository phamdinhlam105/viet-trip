import HotelMainInformation from "@/components/hotel-page/hotel-detail/hotel-main-infor";
import HotelRule from "@/components/hotel-page/hotel-detail/hotel-rule";
import HotelSidebarOffer from "@/components/hotel-page/hotel-detail/hotel-side-offer";
import OthersHotel from "@/components/hotel-page/hotel-detail/other-hotel";
import { HOTEL_MOCK_DATA } from "@/components/mock-data/hotel";
import type { HotelDetail } from "@/components/models/app-models";
import TourDetailGallery from "@/components/tourpage/tour-infor-page/tour-gallery";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
    return HOTEL_MOCK_DATA.map(item => ({
        slug: item.slug,
    }));
}
type Params = Promise<{ slug: string }>;

export default async function HotelDetail({ params }: { params: Params }) {
    const { slug } = await params;

    const hotel = HOTEL_MOCK_DATA.find(item => item.slug === slug) ?? null;

    if (!hotel) return notFound();

    return <div className="md:pt-28 pt-20">
        <div className="md:px-[10%] px-2 py-5 md:flex space-x-4">
            <div className="md:w-3/4 w-full">
                <div className="md:flex block space-x-2 pb-4">
                    <Link className="hover:underline hover:text-blue-400 hover:font-semibold" href="/">Trang chủ </Link><span>/</span>
                    <Link className="hover:underline hover:text-blue-400 hover:font-semibold" href="/hotel">Khách sạn</Link><span>/</span>
                    <p>{hotel.name}</p>
                </div>
                <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
                <TourDetailGallery gallery={hotel.images} />
                <div className="md:hidden py-2">
                    <HotelSidebarOffer {...hotel} />
                </div>
                <HotelMainInformation {...hotel} />
                <HotelRule rule={hotel.rule}/>
            </div>
            <div className="md:w-1/4 md:relative sm:block hidden">
                <HotelSidebarOffer price={hotel.price} id={hotel.id} description={hotel.description} />
            </div>
        </div>
        <OthersHotel id={hotel.id}/>
    </div>
}