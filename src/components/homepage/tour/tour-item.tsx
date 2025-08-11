"use client"
import Image from 'next/image';
import { Button } from '../../ui/button';
import Link from 'next/link';
import { Sheet, SheetTrigger } from '../../ui/sheet';
import TourBookingSheet from '../../tour-booking/tour-booking-sheet';
import { addBookingItem } from '@/lib/bookingStorage';
import { useState } from 'react';
import { formatPrice } from '@/lib/formatPrice';
export default function TourItem({ id, name, description, startingPlace, price, thumbnail,slug }: {
    id: string,
    name: string,
    description: string,
    startingPlace: string,
    price?: string,
    thumbnail: string,
    slug:string
}) {
    const [open, setOpen] = useState(false);

    return <div className="w-full flex flex-col justify-between bg-white rounded-lg border border-gray-200 space-y-4 pb-4 shadow-lg md:hover:scale-105  transition-all duration-500 ease-in-out">
        <Link href={`/tour/${slug}`}>
            <div className='w-full aspect-[3/2] relative'>
                <Image className=' rounded-lg' src={thumbnail} alt="Ảnh đại diện tour" fill unoptimized/>
            </div>

            <div className='space-y-2 px-4 py-4'>
                <h3 className='text-md font-bold line-clamp-2 min-h-12'>
                    {name}
                </h3>
                <p className='text-sm line-clamp-2'>
                    {description}
                </p>
                <p>Khởi hành: <span className='font-semibold'>{startingPlace}</span></p>
                <p>Lịch mở tour: <span className='font-semibold'>Hằng ngày</span></p>
            </div>
        </Link>
        <div className='flex justify-between items-center my-2 px-4'>
            <p className='text-[#FF0000] font-bold md:text-lg'> {price?formatPrice(parseInt(price).toString()):"Liên hệ"}</p>
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