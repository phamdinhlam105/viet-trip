import { AlignJustify, X } from "lucide-react";
import { NavBarStructure } from "./navbar-stucture";
import AppSideBar from "./sidebar";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "../ui/button";

export default function NavigationResponsive() {


  return <Sheet>
    <SheetTrigger asChild><AlignJustify /></SheetTrigger>
    <SheetContent className="w-full p-2 space-y-5">
      <SheetTitle className="sr-only">
        </SheetTitle>

        <SheetClose asChild className="absolute h-10 w-10 right-4 top-4 bg-white">
        </SheetClose>

        <div className="flex justify-center">
          <Link href="/">
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

}