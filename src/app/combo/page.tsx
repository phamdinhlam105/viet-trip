"use client";
import ComboItem from "@/components/homepage/combo/combo-item";
import { Combo } from "@/components/models/app-models";
import TopBannerNoPicture from "@/components/side-page/top-banner-no-picture";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ComboPage() {
  const [sortBy, setSortBy] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const comboList: Combo[] = [];

  const sortedList = comboList.sort((a, b) => {
    const priceA = parseInt(a.price);
    const priceB = parseInt(b.price);

    if (sortBy === "price-asc") return priceA - priceB;
    if (sortBy === "price-desc") return priceB - priceA;
    return 0;
  });

  const totalPages = Math.ceil(sortedList.length / itemsPerPage);
  const paginatedList = sortedList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="md:pt-28 pt-20">
      <TopBannerNoPicture
        breadcrumbs={[{ title: "Combo giá tốt", slug: "combo" }]}
      />
      <div className="md:px-[10%] px-2 py-10">
        <div className="py-4 flex md:flex-row flex-col gap-4 justify-center">
          <Button
            variant="outline"
            className="
                        md:w-1/6
                        rounded-full
                        text-md
                        bg-white
                        bg-gradient-to-r from-[#269F8C] to-[#0E5AA4]
                        bg-clip-text text-transparent
                        border border-[#269F8C]
                        transition-all duration-500 ease-in-out
                        hover:text-white
                        hover:bg-gradient-to-r hover:from-[#269F8C] hover:to-[#0E5AA4]
                        hover:bg-clip-border hover:text-white"
          >
            Tất cả
          </Button>

          <Button
            variant="outline"
            className="
                        md:w-1/6
                        rounded-full
                        text-md
                        bg-white
                        bg-gradient-to-r from-[#269F8C] to-[#0E5AA4]
                        bg-clip-text text-transparent
                        border border-[#269F8C]
                        transition-all duration-500 ease-in-out
                        hover:text-white
                        hover:bg-gradient-to-r hover:from-[#269F8C] hover:to-[#0E5AA4]
                        hover:bg-clip-border hover:text-white"
          >
            Máy bay
          </Button>

          <Button
            variant="outline"
            className="
                        md:w-1/6
                        rounded-full
                        text-md
                        bg-white
                        bg-gradient-to-r from-[#269F8C] to-[#0E5AA4]
                        bg-clip-text text-transparent
                        border border-[#269F8C]
                        transition-all duration-500 ease-in-out
                        hover:text-white
                        hover:bg-gradient-to-r hover:from-[#269F8C] hover:to-[#0E5AA4]
                        hover:bg-clip-border hover:text-white"
          >
            Xe + Khách sạn
          </Button>
        </div>
        <div className="flex justify-end items-center space-x-2 py-4">
          <label className="text-sm font-medium">Sắp xếp theo:</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-40 text-sm">
                {sortBy === "price-asc"
                  ? "Giá tăng dần"
                  : sortBy === "price-desc"
                  ? "Giá giảm dần"
                  : "Mặc định"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("")}>
                Mặc định
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("price-asc")}>
                Giá tăng dần
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("price-desc")}>
                Giá giảm dần
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {comboList.length==0?"Hiện tại chưa có combo":
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          {paginatedList.map((item) => (
            <ComboItem
              key={item.id}
              id={item.id}
              name={item.name}
              tourName={item.tourName}
              hotelName={item.hotelName}
              transportation={item.transportation}
              price={item.price}
              applyDate={item.applyDate}
              endDate={item.endDate}
            />
          ))}
        </div>
}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-2">
            <Button
              variant="outline"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </Button>

            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                onClick={() => goToPage(index + 1)}
                className="w-10"
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
