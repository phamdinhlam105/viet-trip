import { AlignJustify } from "lucide-react";
import { NavBarStructure } from "./navbar-stucture";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Logo from "./logo";

export default function NavigationResponsive() {


  return <Sheet>
    <SheetTrigger asChild><AlignJustify /></SheetTrigger>
    <SheetContent className="p-2 space-y-5">
      <SheetTitle className="sr-only">
        </SheetTitle>

        <SheetClose asChild className="absolute h-10 w-10 right-4 top-4 bg-white">
        </SheetClose>

        <div className="flex justify-center">
          <Link href="/" className=" self-center relative w-2/3 md:w-1/10 aspect-[2/1]">
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