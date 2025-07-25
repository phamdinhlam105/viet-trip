"use client"

import { MapPin, Phone } from "lucide-react";
import Logo from "./logo";
import { NavBarStructure } from "./navbar-stucture";
import Link from "next/link";
import TourBookingSheet from "../tour-booking/tour-booking-sheet";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";
import SearchButton from "../search/search-button";

export default function NavigationBar() {

    const [isOpen, setIsOpen] = useState(false);

    return <nav className="w-full h-28 shadow-md fixed top-0 z-10 bg-white">
        <div className="py-2 px-10 bg-black text-white items-center flex justify-between">
            <div className="flex space-x-4 items-center">
                <Phone /> <span>091 494 3366</span>
            </div>
            <div className="flex space-x-4 items-center text-md">
                <MapPin /> <span>135/8 Nguyễn Thái Học, Nha Trang, Khánh Hoà</span>
            </div>
            <SearchButton/>
        </div>
        <div className="px-[10%] w-full items-center flex justify-between py-2">
            <Link href='/'>
                <Logo />
            </Link>
            <div className="w-2/3">
                <ul className="flex justify-between items-center justify-end space-x-10">
                    {NavBarStructure.map(item =>
                        <li key={item.id} className="flex justify-between items-center">
                            <a href={item.link} className="text-sm font-semibold text-black uppercase">{item.name}</a>
                        </li>
                    )}
                </ul>
            </div>
            <div className="w-fit">
                <Sheet onOpenChange={setIsOpen} open={isOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            Đăng ký tư vấn
                        </Button>
                    </SheetTrigger>
                    <TourBookingSheet openState={isOpen} />
                </Sheet>
            </div>
        </div>
    </nav >
}
