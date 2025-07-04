import HotelItem from "@/components/hotel/hotel-item"
import { HOTEL_MOCK_DATA } from "@/components/mock-data/hotel"


export default function OthersHotel({id}:{id:string}) {

    const otherHotels = HOTEL_MOCK_DATA.filter(hotel => hotel.id !== id);
     const randomHotels = otherHotels
    .sort(() => Math.random() - 0.5) 
    .slice(0, 3); 

    return <div className="py-4">
        <h2 className="font-bold text-2xl text-center">CÁC KHÁCH SẠN KHÁC</h2>
        <div className="md:grid md:grid-cols-3 md:gap-4 md:mx-[10%] space-y-4 py-10 px-2">
            {randomHotels.map(item => <div key={item.id} className="h-full">
                <HotelItem {...item} />
            </div>)}
        </div>
    </div>
}