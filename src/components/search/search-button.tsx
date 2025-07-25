"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Search } from "lucide-react";
import Link from "next/link";
import { prettySearchSlug } from "@/lib/search-format";

export default function SearchButton() {
  const [search, setSearch] = useState("");
  return (
    <Sheet>
      <SheetTrigger>
        <Search />
      </SheetTrigger>
      <SheetContent side="top" className="w-full p-4">
        <SheetHeader>
          <SheetTitle className="text-2xl text-center uppercase font-bold">
            Tìm kiếm
          </SheetTitle>
        </SheetHeader>
        <div className="p-2 space-y-4 flex flex-col items-center">
          <Input
            className="w-full"
            placeholder="Tour nha trang..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link className="rounded-lg border-2 shadow-lg p-2 px-10 font-semibold" href={`/tim-kiem?search=${prettySearchSlug(search)}`}>Tìm kiếm</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
