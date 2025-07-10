
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel";
import { TOUR_MOCK_DATA } from "../mock-data/tour";

const HOT_TOURS = TOUR_MOCK_DATA.map(item=>({
    id:item.id,
    name:item.name,
    link:item.slug
})).slice(0,5);

const LASTEST_NEWS = [
    {
        id: 1,
        name: 'Đồng Cừu Suối Tiên',
        createdAt: '05 Tháng 6, 2025',
        thumbnail: '/homepage/news-dong-cuu.jpg',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 2,
        name: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createdAt: '26 Tháng 6, 2025',
        thumbnail: '/news/nhat-ban.jpg',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 3,
        name: 'Đồng Cừu Suối Tiên',
        createdAt: '05 Tháng 6, 2025',
        thumbnail: '/homepage/news-dong-cuu.jpg',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 4,
        name: 'Đồng Cừu Suối Tiên',
        createdAt: '05 Tháng 6, 2025',
        thumbnail: '/homepage/news-dong-cuu.jpg',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
]

const COOP = [
    {
        id: 1,
        src: '/homepage/coop/vinpearl.png',
        alt: 'Vinpearl'
    },
    {
        id: 2,
        src: '/homepage/coop/tu-hai.png',
        alt: 'Tứ Hải'
    },
    {
        id: 3,
        src: '/homepage/coop/long-phu.png',
        alt: 'Phong Phú'
    },
    {
        id: 4,
        src: '/homepage/coop/sanest.png',
        alt: 'Sanest'
    },
    {
        id: 5,
        src: '/homepage/coop/hai-phong.png',
        alt: 'Hải Phòng'
    },
    {
        id: 6,
        src: '/homepage/coop/resort.png',
        alt: 'Resort'
    },

]

export default function AppFooter() {



    return <div className="text-white bg-black space-y-2">
        <div
            style={{
                backgroundImage: 'url("/homepage/footer-background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            className="justify-self-center justify-items-center py-10 space-y-4 w-full">
            <h3 className="text-xl font-bold">
                Đối Tác Thân Thiết
            </h3>
            <div className=" my-3 w-[250px] bg-white h-[4px]">
            </div>
            <p className="md:text-lg text-sm text-center font-semibold">
                Dối Tác Chúng Tôi Bao Gồm Các Công Ty Du Lịch, Lữ Hành, Khách Sạn...
            </p>
            <div className="grid grid-cols-6 gap-4 justify-center px-2 hidden sm:grid">
                {COOP.map(item =>
                    <Image
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        width={100}
                        height={100}
                    />
                )}
            </div>
            <Carousel className="w-full py-5 sm:hidden">
                <CarouselContent className="flex">
                    {COOP.map(item =>
                        <CarouselItem
                            key={item.id}
                            className="basis-1/3 px-2">
                            <div className="relative w-full aspect-[3/2]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                />
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>
        </div>
        <div className="md:px-20 px-2 py-5 space-y-5">
            <div className="md:grid md:grid-cols-3 space-y-6">
                <div className="px-2">
                    <h3 className="font-bold text-lg md:leading-12">
                        Về Chúng Tôi <br />
                        Công ty TNHH Lữ Hành Quốc Tế Viet Trip
                    </h3>
                    <p className="md:leading-12 leading-8">

                        135/8 Nguyễn Thái Học, Nha Trang, Khánh Hoà<br />
                        091 494 3366 - 084 246 6868<br />
                        viettriptour79@gmail.com<br />
                        www.viettriptourist.com<br />
                        Khám Phá. Trải Nghiệm. Tận hưởng.<br />
                        Viet Trip Tourist - Your Journey, Our Passion!<br />
                        135/8 Nguyễn Thái Học, TP. Nha Trang, Khánh Hoà<br />
                    </p>
                    <div className="flex space-x-4">
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Youtube />
                    </div>
                </div>
                <div className="md:space-y-4 space-y-1 px-2 flex flex-col">
                    <h3 className="font-bold text-lg py-2">Tour Nổi Bật</h3>
                    {HOT_TOURS.map(item =>
                        <a key={item.id} href={item.link} className="truncate">{item.name}</a>
                    )}
                </div>
                <div className="space-y-4 px-2 w-full">
                    <h3 className="font-bold text-lg">
                        Tin Tức Mới Nhất
                    </h3>
                    {LASTEST_NEWS.map(item =>
                        <div key={item.id} className="w-full">
                            <Link href={item.link} className="w-full flex">
                                <div className="relative w-1/3 aspect-[2/1]">
                                    <Image
                                        src={item.thumbnail}
                                        alt={"Tin tức mới nhất"}
                                        fill
                                    />
                                </div>
                                <div className="w-2/3 content-center px-2">
                                    <h3 className="text-lg font-semibold truncate">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm truncate">
                                        {item.createdAt}
                                    </p>
                                </div>
                            </Link>

                        </div>
                    )}
                </div>

            </div>
            <div>
                <span className="font-bold">Chứng Nhận:</span>
            </div>
        </div>

        <div className="text-center bg-[#313131] md:text-lg text-xs">
            Copyright 2025 Công ty TNHH Lữ Hành Quốc Tế Việt Trip. Thiết kế bởi <span className="font-bold underline text-red-700">C/H Solutions</span>
        </div>
    </div>
}