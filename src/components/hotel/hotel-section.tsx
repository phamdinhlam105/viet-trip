import SectionHeader from "../section-header/section-header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import HotelItem from "./hotel-item";
const HOTEL_LIST = [
    {
        id: 1,
        title: 'Khách sạn Mường Thanh',
        describe: 'Khách sạn Mường Thanh - Đối tác Viet Trip Tourist dịch vụ lưu trú hàng đầu tại Thành phố biển Nha Trang.',
        address: '60 Trần Phú, P. Lộc Thọ, TP. Nha Trang, Khánh Hoà',
        price: "1.400.000",
        thumbnail: '/hotel/muong-thanh-1.jpg'
    },
    {
        id: 2,
        title: 'Queen Ann Nha Trang Hotel',
        describe: 'Queen Ann Nha Trang Hotel - Đối tác Viet Trip Tourist dịch vụ lưu trú hàng đầu tại Thành phố biển Nha Trang.',
        address: '100 Trần Phú, P. Lộc Thọ, TP. Nha Trang, Khánh Hoà',
        price: '999.000',
        thumbnail: '/hotel/queen-ann.jpg'
    },
    {
        id: 3,
        title: 'Khách sạn Mường Thanh',
        describe: 'Khách sạn Mường Thanh - Đối tác Viet Trip Tourist dịch vụ lưu trú hàng đầu tại Thành phố biển Nha Trang.',
        address: '60 Trần Phú, P. Lộc Thọ, TP. Nha Trang, Khánh Hoà',
        price: "1.400.000",
        thumbnail: '/hotel/muong-thanh-1.jpg'
    },
    {
        id: 4,
        title: 'Queen Ann Nha Trang Hotel',
        describe: 'Queen Ann Nha Trang Hotel - Đối tác Viet Trip Tourist dịch vụ lưu trú hàng đầu tại Thành phố biển Nha Trang.',
        address: '100 Trần Phú, P. Lộc Thọ, TP. Nha Trang, Khánh Hoà',
        price: '999.000',
        thumbnail: '/hotel/queen-ann.jpg'
    },
]
export default function HotelSection() {

    return <div>
        <SectionHeader
            title="Khách sạn Nha Trang giá tốt"
            describe="Khách sạn Nha Trang được khách hàng quan tâm lựa chọn nhiều nhất Hè 2025" />
        <Carousel className=" w-full" orientation="horizontal">
            <CarouselContent className="snap-x">
                {HOTEL_LIST.map(item => <CarouselItem className="snap-start md:basis-[33%] py-5" key={item.id}>
                    <HotelItem {...item} />
                </CarouselItem >)}
            </CarouselContent >
            <CarouselPrevious className="h-10 w-10" />
            <CarouselNext className="h-10 w-10" />
        </Carousel>
    </div>
}