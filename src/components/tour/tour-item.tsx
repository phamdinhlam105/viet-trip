"use client"
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Sheet, SheetTrigger } from '../ui/sheet';
import TourBookingSheet from '../tour-booking/tour-booking-sheet';
import { addBookingItem } from '@/lib/bookingStorage';
import { useState } from 'react';
export default function TourItem({ id, title, describe, departure, schedule, price, thumbnail }: {
    id: number,
    title: string,
    describe: string,
    departure: string,
    schedule: string,
    price: string,
    thumbnail: string
}) {
    const [open, setOpen] = useState(false);

    return <div className="w-full flex flex-col justify-between bg-white rounded-lg border border-gray-200 space-y-4 pb-4 shadow-lg">
        <Link href={'/tour/tour-3-dao-cano'}>
            <div className='w-full aspect-[3/2] relative'>
                <Image className=' rounded-lg' src={thumbnail} alt="Ảnh đại diện tour" fill />
            </div>

            <div className='space-y-2 px-4 py-4'>
                <h3 className='text-md font-bold'>
                    {title}
                </h3>
                <p className='text-sm'>
                    {describe}
                </p>
                <p>Khởi hành: <span className='font-semibold'>{departure}</span></p>
                <p>Lịch mở tour: {schedule}</p>
            </div>
        </Link>
        <div className='flex justify-between my-2 px-4'>
            <p className='text-[#FF0000] font-bold text-lg'>{price}đ</p>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button className='w-1/2 text-md 
                    bg-gradient-to-r from-[#0E5AA4] to-[#269F8C] 
                    hover:from-[#269F8C] hover:to-[#0E5AA4] hover:scale-105
                    transition-all duration-500 ease-in-out'
                        onClick={() => addBookingItem({ id: id, type: 'tour' })}>
                        Đặt ngay
                    </Button>
                </SheetTrigger>
                <TourBookingSheet openState={open} />
            </Sheet>
        </div>
    </div >
}