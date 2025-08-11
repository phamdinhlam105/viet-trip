"use client";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import TourItem from "../homepage/tour/tour-item";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tour } from "../models/app-models";
import { getAllTour } from "../api/tour-api";
import { toast } from "sonner";
import IsLoading from "../isloading/is-loading";

export default function TourList() {
  const [data, setData] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllTour();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast.error("Không thể tải khách sạn vui lòng thử lại");
    };
    fetchData();
  }, []);
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(9);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sortedTourList = [...data].sort((a, b) => {
    const priceA = a.price ? parseInt(a.price) : null;
    const priceB = b.price ? parseInt(b.price) : null;

    if (priceA === null && priceB !== null) return -1;
    if (priceA !== null && priceB === null) return 1;

    if (sortBy === "price-asc") return (priceA ?? 0) - (priceB ?? 0);
    if (sortBy === "price-desc") return (priceB ?? 0) - (priceA ?? 0);

    return 0;
  });
  const totalPages = Math.ceil(sortedTourList.length / itemsPerPage);
  const paginatedTours = sortedTourList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="md:px-[10%] px-2 py-5">
      <div className="flex items-center space-x-6 justify-end mb-4">
        <DropdownMenu>
          <label>Sắp xếp theo: </label>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-30">
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
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className="md:grid md:grid-cols-3 gap-5">
          {paginatedTours.map((item) => (
            <TourItem key={item.id} {...item} />
          ))}
        </div>
      )}
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
    </div>
  );
}
