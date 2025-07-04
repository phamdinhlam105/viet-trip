import { TOUR_MOCK_DATA } from "@/components/mock-data/tour";
import TourMainInformation from "@/components/tourpage/tour-infor-page/main-infor";
import NoticeInformation from "@/components/tourpage/tour-infor-page/notice-infor";
import RelatedTour from "@/components/tourpage/tour-infor-page/related-tour";
import TourDetailGallery from "@/components/tourpage/tour-infor-page/tour-gallery";
import TourSchedule from "@/components/tourpage/tour-infor-page/tour-schedule";
import TourSidebarOffer from "@/components/tourpage/tour-infor-page/tour-side-offer";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
    return TOUR_MOCK_DATA.map(item => ({
        slug: item.slug,
    }));
};
type Params = Promise<{ slug: string }>;

export default async function TourDetail({ params }: { params: Params }) {
    const { slug } = await params;

    // 🔒 Dữ liệu thực tế sẽ được thay vào đây
    const tour = TOUR_MOCK_DATA.find(item => item.slug === slug) ?? null;

    if (!tour) {
        return notFound();
    }

    return (
        <div className="md:px-[10%] md:pt-28 pt-20">
            <div className="px-2 py-10 md:flex space-x-4">
                <div className="md:w-3/4 w-full">
                    <div className="md:flex block space-x-2 pb-4">
                        <Link className="hover:underline hover:text-blue-400 hover:font-semibold" href="/">Trang chủ </Link>
                        <span>/</span>
                        <Link className="hover:underline hover:text-blue-400 hover:font-semibold" href="/hotel">Tour Nha Trang</Link>
                        <span>/</span>
                        <p>{tour.name}</p>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{tour.name}</h1>
                    <TourDetailGallery gallery={tour.gallery} />
                    <div className="md:hidden py-2">
                        <TourSidebarOffer {...tour} />
                    </div>
                    <TourMainInformation description={tour.description} {...tour.tourDetail} />
                    <TourSchedule schedule={tour.schedule} scheduleDetail={tour.scheduleDetail} />
                    <NoticeInformation {...tour.noticeInformation} />
                </div>
                <div className="md:w-1/4 md:relative sm:block hidden">
                    <TourSidebarOffer id={tour.id} price={tour.price} />
                </div>
            </div>
            <RelatedTour id={tour.id} />
        </div>
    );
}
