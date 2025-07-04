
import { TOUR_MOCK_DATA } from "../mock-data/tour";
import SectionHeader from "../section-header/section-header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import TourItem from "./tour-item";

export default function TourSection() {

    return <div>
        <SectionHeader title="Tour Nha Trang Hot" link="/tour"/>
        <Carousel className=" w-full" orientation="horizontal">
            <CarouselContent className="snap-x items-stretch">
                {TOUR_MOCK_DATA.map(item => <CarouselItem className="snap-start md:basis-[33%] py-5 flex" key={item.id}>
                    <TourItem {...item} />
                </CarouselItem >)}
            </CarouselContent>
            <CarouselPrevious className="h-10 w-10 hidden sm:flex" />
            <CarouselNext className="h-10 w-10 hidden sm:flex" />
        </Carousel>
    </div>
}