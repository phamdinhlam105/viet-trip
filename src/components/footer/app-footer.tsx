import { truncateText } from "@/lib/truncate-text"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const HOT_TOURS = [
    {
        id: '1',
        name: 'Tour 3 Đảo Cano',
        link: '/tour/du-lich-nha-trang'
    },
    {
        id: '2',
        name: 'Tham Quan Đảo Điệp Sơn - Dốc Lết',
        link: '/tour/tour-3-dao-cano'
    },
    {
        id: '3',
        name: 'Đồng Cừu - Vĩnh Hy - Hang Rái - Vườn Nho',
        link: '/tour/tour-3-dao-cano'
    },
    {
        id: '4',
        name: 'Tour Nha Trang - Bình Ba',
        link: '/tour/tour-3-dao-cano'
    },
    {
        id: '5',
        name: 'Tour Nha Trang - Bình Ba 2 Ngày 1 Đêm',
        link: '/tour/tour-3-dao-cano'
    },
]

const LASTEST_NEWS = [
    {
        id: 1,
        name: 'Đồng Cừu Suối Tiên',
        createdAt: '05 Tháng 6, 2025',
        thumbnail: '/homepage/news-dong-cuu.jpg',
        link: '/news/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 2,
        name: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createdAt: '26 Tháng 6, 2025',
        thumbnail: '/news/nhat-ban.jpg',
        link: '/news/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 3,
        name: 'Đồng Cừu Suối Tiên',
        createdAt: '05 Tháng 6, 2025',
        thumbnail: '/homepage/news-dong-cuu.jpg',
        link: '/news/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 4,
        name: 'Đồng Cừu Suối Tiên',
        createdAt: '05 Tháng 6, 2025',
        thumbnail: '/homepage/news-dong-cuu.jpg',
        link: '/news/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
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
            className="justify-self-center justify-items-center py-5 space-y-3 w-full">
            <h3 className="text-xl font-bold">
                Đối Tác Thân Thiết
            </h3>
            <div className=" my-3 w-[250px] bg-white h-[4px]">
            </div>
            <p className="md:text-lg text-sm text-center font-semibold">
                Dối Tác Chúng Tôi Bao Gồm Các Công Ty Du Lịch, Lữ Hành, Khách Sạn...
            </p>
            <div className="grid md:grid-cols-6 grid-cols-3 gap-4 justify-center px-2">
                <Image
                    src={'/homepage/coop/vinpearl.png'}
                    alt={"Tin tức mới nhất"}
                    width={100}
                    height={100}
                />
                <Image
                    src={'/homepage/coop/tu-hai.png'}
                    alt={"Tin tức mới nhất"}
                    width={100}
                    height={100}
                />
                <Image
                    src={'/homepage/coop/long-phu.png'}
                    alt={"Tin tức mới nhất"}
                    width={100}
                    height={100}
                />
                <Image
                    src={'/homepage/coop/sanest.png'}
                    alt={"Tin tức mới nhất"}
                    width={100}
                    height={100}
                />
                <Image
                    src={'/homepage/coop/hai-phong.png'}
                    alt={"Tin tức mới nhất"}
                    width={100}
                    height={100}
                />
                <Image
                    src={'/homepage/coop/resort.png'}
                    alt={"Tin tức mới nhất"}
                    width={100}
                    height={100}
                />
            </div>
        </div>
        <div className="md:px-20 px-2 py-5 space-y-5">
            <div className="md:grid md:grid-cols-3 space-y-6">
                <div className="px-2">
                    <h3 className="font-bold text-lg md:leading-12">
                        Về Chúng Tôi <br />
                        Công ty TNHH Lữ Hành Quốc Tế Viet Trip
                    </h3>
                    <p className="md:leading-12 leading-8">

                        135/8 Nguyễn Thái Học, Vạn Thạnh, TP. Nha Trang, Khánh Hoà<br />
                        091 494 3366 - 084 246 6868<br />
                        nhatrangdulich.vn@gmail.com<br />
                        www.viettriptourist.vn<br />
                        Khám Phá. Trải Nghiệm. Tận hưởng.<br />
                        Viet Trip Tourist - Your Journey, Our Passion!<br />
                        135/8 Nguyễn Thái Học, TP. Nha Trang, Khánh Hoà<br />
                        084 246 6868
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