"use client"
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Sheet, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';
import TourBookingSheet from '../tour-booking/tour-booking-sheet';
import { addBookingItem } from '@/lib/bookingStorage';
import { truncateText } from '@/lib/truncate-text';
export default function HotelItem({ id, title, describe, address, price, thumbnail }: {
    id: number
    title: string,
    describe: string,
    address: string,
    price: string,
    thumbnail: string
}) {
    const [open, setOpen] = useState(false);
    return <div className="w-full flex flex-col justify-between bg-white rounded-lg space-y-4 pb-4 border border-gray-200 shadow-lg">
        <Link href={'/tour/du-lich-nha-trang'}>
            <div className='relative w-full aspect-[3/2]'>
                <Image
                    className='rounded rounded-lg object-cover'
                    src={thumbnail}
                    alt="Ảnh đại diện tour"
                    fill
                />
            </div>
            <div className='space-y-2 px-4 py-4'>
                <h3 className='text-md font-bold'>
                    {title}
                </h3>
                <p className='text-sm'>
                    {truncateText(describe, 90)}
                </p>
                <p className='text-sm truncate'>{address}</p>

            </div>
        </Link>

        <div className='flex justify-between my-2 px-4'>
            <p className='text-sm'>giá từ <span className='text-[#FF0000] font-bold text-lg'>{price}đ</span></p>
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