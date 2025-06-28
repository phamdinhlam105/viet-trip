import TopCarousel from "@/components/carousel/top-carousel";
import ComboSection from "@/components/combo/combo-section";
import ActionNavigation from "@/components/homepage/action-navigation";
import HomePageBanner from "@/components/homepage/home-banner";
import HotelSection from "@/components/hotel/hotel-section";
import TourSection from "@/components/tour/tour-section";
import VideoSection from "@/components/videos/video-section";
import WhyChooseUs from "@/components/whychooseus/why-us";

export default function Home() {
  return (
    <div>
      <HomePageBanner />
      <div className="px-[10%] py-5">
        <ActionNavigation />
        <TopCarousel />
      </div>
      <WhyChooseUs />
      <div className="px-[10%] py-5 bg-[#DAEFFF]">
        <TourSection />
      </div>
      <div className="px-[10%] py-5">
        <HotelSection />
        <VideoSection />
      </div>
      <div className="px-[10%] py-5 bg-[#DAEFFF]">
        <ComboSection />
      </div>
    </div>
  );
}
