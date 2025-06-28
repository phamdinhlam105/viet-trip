import TourItem from "@/components/tour/tour-item"


const RELATED_TOUR = [{
    id: 1,
    title: 'Tour Lặn Biển San Hô',
    describe: 'Tour Lặn Biển San Hô là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
    departure: 'TP. Nha Trang',
    schedule: 'Hàng ngày',
    price: '450.000',
    thumbnail: '/tour/vinh-san-ho.jpg'
},
{
    id: 2,
    title: 'Tour Lặn Biển San Hô',
    describe: 'Tour Lặn Biển San Hô là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
    departure: 'TP. Nha Trang',
    schedule: 'Hàng ngày',
    price: '450.000',
    thumbnail: '/tour/vinh-san-ho.jpg'
},
{
    id: 3,
    title: 'Tour Lặn Biển San Hô',
    describe: 'Tour Lặn Biển San Hô là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
    departure: 'TP. Nha Trang',
    schedule: 'Hàng ngày',
    price: '450.000',
    thumbnail: '/tour/vinh-san-ho.jpg'
},
]
export default function RelatedTour() {

    return <div className="py-4">
        <h2 className="font-bold text-2xl text-center">CÁC CHƯƠNG TRÌNH KHÁC</h2>
        <div className="md:grid md:grid-cols-3 md:gap-4 md:mx-[10%] space-y-4 py-10 px-2">
            {RELATED_TOUR.map(item => <div key={item.id} className="h-full">
                <TourItem {...item} />
            </div>)}
        </div>
    </div>
}