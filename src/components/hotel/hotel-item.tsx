"use client"
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Sheet, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';
import TourBookingSheet from '../tour-booking/tour-booking-sheet';
import { addBookingItem } from '@/lib/bookingStorage';
import { formatPrice } from '@/lib/formatPrice';
export default function HotelItem({ id, name, description, address, price, thumbnail, slug }: {
    id: string
    name: string,
    description: string,
    address: string,
    price: string,
    thumbnail: string,
    slug:string
}) {
    const [open, setOpen] = useState(false);
    return <div className="w-full flex flex-col justify-between bg-white rounded-lg border border-gray-200 space-y-4 pb-4 shadow-lg">
        <Link href={`/hotel/${slug}`}>
            <div className='w-full aspect-[3/2] relative'>
                <Image
                    src={thumbnail}
                    alt="Ảnh đại diện khách sạn"
                    fill
                    unoptimized
                />
            </div>
            <div className='space-y-2 px-4 py-4'>
                <h3 className='text-md font-bold line-clamp-2 min-h-12'>
                    {name}
                </h3>
                <p className='text-sm line-clamp-2'>
                    {description}
                </p>
                <p className='text-sm truncate text-gray-600'>{address}</p>

            </div>
        </Link>

        <div className='flex justify-between items-center my-2 px-4'>
            <p className='text-sm'>giá từ <span className='text-[#FF0000] font-bold text-lg'> {formatPrice(price)}</span></p>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button className='w-1/2 text-md 
                    bg-gradient-to-r from-[#0E5AA4] to-[#269F8C] 
                    hover:from-[#269F8C] hover:to-[#0E5AA4] hover:scale-105
                    transition-all duration-500 ease-in-out'
                        onClick={() => addBookingItem({ id: id, type: 'hotel' })}>
                        Đặt ngay
                    </Button>
                </SheetTrigger>
                <TourBookingSheet openState={open} />
            </Sheet>
        </div>

    </div>
}