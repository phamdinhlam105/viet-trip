"use client"

import { ArrowRightIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "../ui/sheet"
import { useState } from "react";
import TourBookingSheet from "../tour-booking/tour-booking-sheet";
import { Button } from "../ui/button";
import { addBookingItem } from "@/lib/bookingStorage";
import { formatPrice } from "@/lib/formatPrice";

export default function ComboItem({ id, arrival, departure, schedule, accommodation, transportation, price }: {
    id: string,
    arrival: string,
    departure: string,
    schedule: string,
    accommodation: string,
    transportation: string,
    price: string
}) {

    const [open, setOpen] = useState(false);

    return <div className="bg-white rounded rounded-lg p-4 text-sm border border-gray-50 shadow-lg">
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    onClick={() => addBookingItem({ id: id, type: 'combo' })}
                    variant="ghost"
                    className="hover:bg-white h-full w-full flex-col items-start p-0">
                    <div className="w-full space-y-2 flex flex-col justify-start text-left">
                        <div className="px-4 flex items-center justify-between space-x-3 h-10">
                            <div className="font-bold uppercase">{departure}</div>
                            <ArrowRightIcon />
                            <div className="font-bold uppercase">{arrival}</div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 font-bold">Mã tour:</div>
                            <div className="w-1/2">{id}</div>
                        </div>
                        <div className="flex justify-start">
                            <div className="w-1/2 font-bold">Khởi hành:</div>
                            <div className="w-1/2">{schedule}</div>
                        </div>
                        <div className="flex justify-start">
                            <div className="w-1/2 font-bold">Khách sạn:</div>
                            <div className="w-1/2 truncate">{accommodation}</div>
                        </div>
                        <div className="flex justify-start">
                            <div className="w-1/2 font-bold">Phương tiện:</div>
                            <div className="w-1/2">{transportation}</div>
                        </div>
                    </div>
                    <div className="w-full text-right font-semibold">
                        <p>Giá từ</p>
                        <p className="text-lg"><span className=" font-bold text-[#FF0000]"> {formatPrice(price)}</span> / Khách</p>
                    </div>
                </Button>

            </SheetTrigger>
            <TourBookingSheet openState={open} />
        </Sheet>

    </div>
}