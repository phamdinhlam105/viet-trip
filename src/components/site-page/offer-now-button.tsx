"use client"
import { addBookingItem } from "@/lib/bookingStorage";
import { Sheet, SheetTrigger } from '../ui/sheet';
import { Button } from "../ui/button";
import { useState } from "react";
import TourBookingSheet from "../tour-booking/tour-booking-sheet";

export default function OfferNowButton({id,type}:{id:number,type:string}) {

    const [open, setOpen] = useState(false);

    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button className='w-full text-md 
                    bg-gradient-to-r from-[#0E5AA4] to-[#269F8C] 
                    hover:from-[#269F8C] hover:to-[#0E5AA4] hover:scale-105
                    transition-all duration-500 ease-in-out'
                onClick={() => addBookingItem({ id: id, type: type })}>
                Đặt ngay
            </Button>
        </SheetTrigger>
        <TourBookingSheet openState={open} />
    </Sheet>
}

