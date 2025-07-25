import Image from "next/image";

export default function HomePageBanner() {

    return <div className="w-full aspect-[1/1] md:aspect-[3/1] relative">
        <h1 className="sr-only">Viettrip Tourist - Tour du lịch chuyên nghiệp toàn quốc</h1>
        <Image
            className="object-fill hidden md:block"
            alt="top banner desktop"
            src="/homepage/homepage-banner.jpg"
            fill
            priority
            unoptimized
        />
        {/* Mobile Banner */}
        <Image
            className="object-fill block md:hidden"
            alt="top banner mobile"
            src="/homepage/homepage-mobile.jpg"
            fill
            priority
            unoptimized
        />
    </div>
}