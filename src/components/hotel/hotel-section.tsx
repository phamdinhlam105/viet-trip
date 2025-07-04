import { HOTEL_MOCK_DATA } from "../mock-data/hotel";
import SectionHeader from "../section-header/section-header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import HotelItem from "./hotel-item";

export default function HotelSection() {

    return <div>
        <SectionHeader
            title="Khách sạn Nha Trang giá tốt"
            describe="Khách sạn Nha Trang được khách hàng quan tâm lựa chọn nhiều nhất Hè 2025"
            link='/hotel' />
        <Carousel className=" w-full" orientation="horizontal">
            <CarouselContent className="snap-x">
                {HOTEL_MOCK_DATA.map(item => <CarouselItem className="snap-start md:basis-[33%] py-5" key={item.id}>
                    <HotelItem {...item} />
                </CarouselItem >)}
            </CarouselContent >
            <CarouselPrevious className="h-10 w-10 hidden sm:flex" />
            <CarouselNext className="h-10 w-10 hidden sm:flex" />
        </Carousel>
    </div>
}