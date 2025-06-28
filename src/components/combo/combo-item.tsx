import { ArrowRightIcon } from "lucide-react"

export default function ComboItem({ id, arrival, departure, schedule, accommodation, transportation, price }: {
    id: number,
    arrival: string,
    departure: string,
    schedule: string,
    accommodation: string,
    transportation: string,
    price: string
}) {

    return <div className="bg-white rounded rounded-lg p-4 text-sm border border-gray-50 shadow-lg">
        <div className="space-y-2">
            <div className="flex items-center justify-between space-x-3 h-10">
                <div className="font-bold uppercase">{departure}</div>
                <ArrowRightIcon />
                <div className="flex items-center space-x-2">
                    <span className="font-bold uppercase">{arrival}</span>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2 font-bold">Mã tour:</div>
                <div className="w-1/2">{id}</div>
            </div>
            <div className="flex">
                <div className="w-1/2 font-bold">Khởi hành:</div>
                <div className="w-1/2">{schedule}</div>
            </div>
            <div className="flex">
                <div className="w-1/2 font-bold">Khách sạn:</div>
                <div className="w-1/2 truncate">{accommodation}</div>
            </div>
            <div className="flex">
                <div className="w-1/2 font-bold">Phương tiện:</div>
                <div className="w-1/2">{transportation}</div>
            </div>
        </div>
        <div className="text-right font-semibold">
            <p>Giá từ</p>
            <p className="text-lg"><span className=" font-bold text-[#FF0000]">{price} đ</span> / Khách</p>
        </div>
    </div>
}