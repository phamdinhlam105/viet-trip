
import SectionHeader from "../section-header/section-header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import TourItem from "./tour-item";

const TOUR_LIST = [
    {
        id: 1,
        title: 'Tour 3 Đảo Cano',
        describe: 'Tour 3 Đảo Cano là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '450.000',
        thumbnail: '/homepage/tour.jpg'
    },
    {
        id: 2,
        title: 'Tour Lặn Biển San Hô',
        describe: 'Tour Lặn Biển San Hô là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '550.000',
        thumbnail: '/tour/vinh-san-ho-2.jpg'
    },
    {
        id: 3,
        title: 'Tour 3 Đảo Cano',
        describe: 'Tour 3 Đảo Cano là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '450.000',
        thumbnail: '/homepage/tour.jpg'
    },
    {
        id: 4,
        title: 'Tour Lặn Biển San Hô',
        describe: 'Tour Lặn Biển San Hô là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '550.000',
        thumbnail: '/tour/vinh-san-ho-2.jpg'
    },
    {
        id: 5,
        title: 'Tour 3 Đảo Cano',
        describe: 'Tour 3 Đảo Cano là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '450.000',
        thumbnail: '/homepage/tour.jpg'
    },
]

export default function TourSection() {

    return <div>
        <SectionHeader title="Tour Nha Trang Hot" link="/tour"/>
        <Carousel className=" w-full" orientation="horizontal">
            <CarouselContent className="snap-x items-stretch">
                {TOUR_LIST.map(item => <CarouselItem className="snap-start md:basis-[33%] py-5 h-full" key={item.id}>
                    <TourItem {...item} />
                </CarouselItem >)}
            </CarouselContent>
            <CarouselPrevious className="h-10 w-10 hidden sm:flex" />
            <CarouselNext className="h-10 w-10 hidden sm:flex" />
        </Carousel>
    </div>
}