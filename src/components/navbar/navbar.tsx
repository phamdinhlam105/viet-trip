import {  ClipboardCheckIcon, MapPin, Phone, Search } from "lucide-react";
import Logo from "./logo";
import { NavBarStructure } from "./navbar-stucture";
import Link from "next/link";
import NavigationResponsive from "./navbar-responsive";
import TourBookingSheet from "../tour-booking/tour-booking-sheet";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export default function NavigationBar() {

    return <nav className="w-full border-radius-md shadow-md md:sticky md:top-0 z-10 bg-white">
        <div className="hidden sm:block py-2 px-10 bg-black text-white md:items-center md:flex md:justify-between">
            <div className="flex space-x-4 items-center">
                <Phone /> <span>084 246 6868</span>
            </div>
            <div className="flex space-x-4 items-center text-sm md:text-md">
                <MapPin /> <span>135/8 Nguyễn Thái Học, Nha Trang, Khánh Hoà</span>
            </div>
            <div>
                <Search />
            </div>
        </div>
        <div className="md:px-10 px-2 w-full items-center flex justify-between space-x-2 py-2">
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="md:hidden block flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost">
                            <ClipboardCheckIcon />
                        </Button>
                    </SheetTrigger>
                    <TourBookingSheet openState={false} />
                </Sheet>
                <NavigationResponsive />
            </div>
            <div className="md:min-w-3/4 hidden sm:block">
                <ul className="flex justify-between justify-end space-x-10">
                    {NavBarStructure.map(item =>
                        <li key={item.id} className="flex justify-between">
                            <a href={item.link} className="text-sm font-semibold text-black uppercase">{item.name}</a>
                        </li>
                    )}
                </ul>
            </div>
            <div className="md:w-10 hidden sm:block">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost">
                              <ClipboardCheckIcon />
                        </Button>
                    </SheetTrigger>
                    <TourBookingSheet openState={false} />
                </Sheet>
            </div>
        </div>
    </nav >
}