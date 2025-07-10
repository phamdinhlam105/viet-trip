import Image from "next/image";

export default function HomePageBanner() {

    return <div className="w-full aspect-[1/1] md:aspect-[3/1] relative">
        <Image
            className="object-fill hidden md:block"
            alt="top banner desktop"
            src="/homepage/top-banner.png"
            fill
            priority
        />
        {/* Mobile Banner */}
        <Image
            className="object-fill block md:hidden"
            alt="top banner mobile"
            src="/homepage/top-banner-mobile.png"
            fill
            priority
        />
    </div>
}