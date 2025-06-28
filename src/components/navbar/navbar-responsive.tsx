"use client"
import { AlignJustify } from "lucide-react";
import { NavBarStructure } from "./navbar-stucture";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
import { Button } from "../ui/button";
import TourBookingSheet from "../tour-booking/tour-booking-sheet";

export default function NavigationResponsive() {

    const [isOpen, setIsOpen] = useState(false);
  return <nav className="w-full h-20 border-radius-md shadow-md fixed top-0 z-10 bg-white flex items-center">
    <div className="md:px-[10%] px-2 w-full items-center flex justify-between space-x-2 py-2">
      <Link href="/" className="w-1/5 aspect-[2/1]">
        <Logo />
      </Link>
      <div className="flex items-center space-x-2">
        <Sheet onOpenChange={setIsOpen} open={isOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="text-sm">
              Đăng ký tư vấn
            </Button>
          </SheetTrigger>
          <TourBookingSheet openState={isOpen} />
        </Sheet>
        <Sheet>
          <SheetTrigger asChild><AlignJustify /></SheetTrigger>
          <SheetContent className="p-2 space-y-5">
            <SheetTitle className="sr-only">
            </SheetTitle>

            <SheetClose asChild className="absolute h-10 w-10 right-4 top-4 bg-white">
            </SheetClose>

            <div className="flex justify-center">
              <Link href="/" className=" self-center w-2/3 aspect-[2/1]">
                <Logo />
              </Link>
            </div>

            {NavBarStructure.map(item =>
              <div key={item.id} className="flex justify-end">
                <a href={item.link} className="w-full text-center font-semibold text-black uppercase">{item.name}</a>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </nav>
}
