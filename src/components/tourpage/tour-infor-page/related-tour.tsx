import { TOUR_MOCK_DATA } from "@/components/mock-data/tour"
import TourItem from "@/components/tour/tour-item"

export default function RelatedTour({id}:{id:string}) {

    const otherTours = TOUR_MOCK_DATA.filter(hotel => hotel.id !== id);
    const randomTours = otherTours
    .sort(() => Math.random() - 0.5) 
    .slice(0, 3); 
    return <div className="py-4">
        <h2 className="font-bold text-2xl text-center">CÁC CHƯƠNG TRÌNH KHÁC</h2>
        <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 py-10 px-2">
            {randomTours.map(item => <div key={item.id} className="h-full">
                <TourItem {...item} />
            </div>)}
        </div>
    </div>
}