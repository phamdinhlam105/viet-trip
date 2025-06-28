import HotelItem from "@/components/hotel/hotel-item"


const OTHERS_HOTEL = [
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
]
export default function OthersHotel() {
    return <div className="py-4">
        <h2 className="font-bold text-2xl text-center">CÁC KHÁCH SẠN KHÁC</h2>
        <div className="md:grid md:grid-cols-3 md:gap-4 md:mx-[10%] space-y-4 py-10 px-2">
            {OTHERS_HOTEL.map(item => <div key={item.id} className="h-full"><HotelItem {...item} /></div>)}
        </div>
    </div>
}