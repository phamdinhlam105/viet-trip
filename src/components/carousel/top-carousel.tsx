import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel";

const images = [
    {
        id: 1,
        url: '/homepage/carousel.jpg'
    },
    {
        id: 2,
        url: '/homepage/carousel.jpg'
    },
    {
        id: 3,
        url: '/homepage/carousel.jpg'
    },
    {
        id: 4,
        url: '/homepage/carousel.jpg'
    },
    {
        id: 5,
        url: '/homepage/carousel.jpg'
    },
    {
        id: 6,
        url: '/homepage/carousel.jpg'
    },
]

export default function TopCarousel() {

    return <Carousel className="w-full py-5" >
        <CarouselContent className="w-full gap-4">
            {images.map(item =>
                <CarouselItem className="basis-full md:basis-[32%] py-5" key={item.id}>
                    <div className="rounded-lg shadow-lg">
                        <div className="relative w-full aspect-[3/2]">
                            <Image
                               fill
                                src={item.url}
                                alt="carousel"
                                className="rounded-lg"
                            />
                        </div>

                    </div>
                </CarouselItem >
            )}
        </CarouselContent>
    </Carousel>
}