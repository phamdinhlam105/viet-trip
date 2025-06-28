import TopCarousel from "@/components/carousel/top-carousel";
import ComboSection from "@/components/combo/combo-section";
import HomePageBanner from "@/components/homepage/home-banner";
import HotelSection from "@/components/hotel/hotel-section";
import TourSection from "@/components/tour/tour-section";
import VideoSection from "@/components/videos/video-section";
import WhyChooseUs from "@/components/whychooseus/why-us";

export default function Home() {
  return (
    <div className="md:pt-28 pt-20">
      <HomePageBanner />
      <div className="md:px-[10%] px-2 py-5">
        <TopCarousel />
      </div>
      <WhyChooseUs />
      <div className="md:px-[10%] px-2 py-5 bg-[#DAEFFF]">
        <TourSection />
      </div>
      <div className="md:px-[10%] px-2 py-5">
        <HotelSection />
        <VideoSection />
      </div>
      <div className="md:px-[10%] px-2 py-5 bg-[#DAEFFF]">
        <ComboSection />
      </div>
    </div>
  );
}
