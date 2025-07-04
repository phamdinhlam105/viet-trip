import SectionHeader from "../section-header/section-header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ComboItem from "./combo-item";


export const COMBO_LIST = [
    {
        id: "1",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '1.500.000'
    },
    {
        id: "2",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '3.500.000'
    },
    {
        id: "3",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '5.900.000'
    },
    {
        id: "4",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '5.900.000'
    },
    {
        id: "5",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '5.900.000'
    },
    {
        id: "6",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '5.900.000'
    },
    {
        id: "7",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '5.900.000'
    },
    {
        id: "8",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '5.900.000'
    },
    {
        id: "9",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '5.900.000'
    },
    {
        id: "10",
        arrival: 'Nha Trang',
        departure: 'Hà Nội',
        schedule: '20/07/2025',
        accommodation: 'Khách sạn Mường Thanh',
        transportation: 'Máy bay',
        price: '5.900.000'
    }
]

type ComboItemType = {
    id: string;
    arrival: string;
    departure: string;
    schedule: string;
    accommodation: string;
    transportation: string;
    price: string;
};

export default function ComboSection() {

    const groupIntoPairs = (array: ComboItemType[]): [ComboItemType, ComboItemType][] => {
        const result: [ComboItemType, ComboItemType][] = [];

        for (let i = 0; i < array.length; i += 2) {
            // đảm bảo item[i + 1] tồn tại
            if (array[i + 1]) {
                result.push([array[i], array[i + 1]]);
            } else {
                result.push([array[i], array[i]]); // hoặc xử lý khác tùy ý
            }
        }

        return result;
    };
    const comboPairs = groupIntoPairs(COMBO_LIST)

    return <div className="space-y-4">
        <SectionHeader title="Combo Hot" link="/combo"/>
        <Carousel className="w-full" >
            <CarouselContent className="snap-x">
                {comboPairs.map(item => <CarouselItem className="md:basis-[25%] space-y-4 py-5 snap-start" key={item[0].id}>
                    <ComboItem {...item[0]} />
                    <ComboItem {...item[1]} />
                </CarouselItem >)}
            </CarouselContent>
            <CarouselPrevious className="h-10 w-10 hidden sm:flex" />
            <CarouselNext className="h-10 w-10 hidden sm:flex" />
        </Carousel>
    </div>
}