import TopBannerNoPicture from "@/components/site-page/top-banner-no-picture";
import TourList from "@/components/tourpage/tour-list";

export default function TourPage() {

    return <div className="md:pt-28 pt-20">
        <TopBannerNoPicture breadcrumbs={[{ title: 'Tour Nha Trang', slug: 'tour' }]} />
        <TourList />
    </div>
}