import Image from "next/image";

export default function HomePageBanner() {

    return <div className="w-full aspect-[3/1] relative">
        <Image
            className="object-fill"
            alt="top banner"
            src="/homepage/top-banner-background.png"
            fill
        />
    </div>
}