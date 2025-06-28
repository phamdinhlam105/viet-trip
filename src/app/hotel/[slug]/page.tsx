import HotelMainInformation from "@/components/hotel-page/hotel-detail/hotel-main-infor";
import HotelSidebarOffer from "@/components/hotel-page/hotel-detail/hotel-side-offer";
import OthersHotel from "@/components/hotel-page/hotel-detail/other-hotel";
import type { HotelDetail } from "@/components/models/app-models";
import NoticeInformation from "@/components/tourpage/tour-infor-page/notice-infor";
import TourDetailGallery from "@/components/tourpage/tour-infor-page/tour-gallery";
import { notFound } from "next/navigation";

const HOTEL: HotelDetail = {
    id: '1',
    slug: "queen-ann-nha-trang-hotel",
    name: "Queen Ann Nha Trang Hotel",
    description: "Khách sạn Queen Ann Nha Trang xinh đẹp VIP pro và những dịch vụ tuyệt vời.",
    price: '2.990.000',
    images: ["/hotel/queen-ann.jpg", "/hotel/queen-ann-2.jpg", "/hotel/queen-ann-3.jpg", "/hotel/queen-ann.jpg", "/hotel/queen-ann.jpg"],
    additionalDetail: {
        mainFeature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        address: '100 Trần Phú, P. Lộc Thọ, TP.Nha Trang, Khánh Hòa',
        food: 'Buffet sáng',
        suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
        openTime: '6:00 - 23:00',
        transportation: 'Xe du lịch, Cano',
        promotion: 'Quầy bar mini tại phòng'
    },
}

export const generateStaticParams = () => {
    return [{
        slug: HOTEL.slug,
    }];
}
type Params = Promise<{ slug: string }>;

export default async function HotelDetail({ params }: { params: Params }) {
    const { slug } = await params;

    const hotel = HOTEL.slug === slug ? HOTEL : null;

    if (!hotel) return notFound();

    return <div>
        <div className="md:px-[10%] px-2 py-10 md:flex space-x-4">
            <div className="md:w-3/4 w-full">
                <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
                <TourDetailGallery images={hotel.images} />
                <HotelMainInformation {...hotel.additionalDetail} />
                <NoticeInformation />
            </div>
            <div className="md:w-1/4 md:relative">
                <HotelSidebarOffer {...hotel} />
            </div>
        </div>
        <OthersHotel />
    </div>
}