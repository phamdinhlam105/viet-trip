import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import OfferNowButton from "../site-page/offer-now-button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/formatPrice";
import { Hotel } from "../models/app-models";

export default function HotelList({
  listdata,
  sortBy,
  onSortChange,
}: {
  listdata: Hotel[];
  sortBy: string;
  onSortChange: (value: string) => void;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sortedList = [...listdata].sort((a, b) => {
    const normalizePrice = (value: string | undefined) =>
      parseInt((value ?? "0").toString().replace(/[.,]/g, ""));

    const priceA = normalizePrice(a.promotionPrice ?? a.price);
    const priceB = normalizePrice(b.promotionPrice ?? b.price);

    if (sortBy === "price-asc") {
      return priceA - priceB;
    } else if (sortBy === "price-desc") {
      return priceB - priceA;
    } else if (sortBy === "star-asc") {
      return a.star - b.star;
    } else if (sortBy === "star-desc") {
      return b.star - a.star;
    }
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
    <div className=" space-y-4 p-4 w-full h-full">
      <div className="flex justify-end items-center space-x-2">
        <label className="text-sm font-medium">Sắp xếp theo:</label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-32 text-sm ">
              {sortBy === "price-asc" && "Giá tăng dần"}
              {sortBy === "price-desc" && "Giá giảm dần"}
              {sortBy === "star-asc" && "Sao tăng dần"}
              {sortBy === "star-desc" && "Sao giảm dần"}
              {sortBy === "" && "Mặc định"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onSortChange("")}>
              Mặc định
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange("price-asc")}>
              Giá tăng dần
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange("price-desc")}>
              Giá giảm dần
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange("star-asc")}>
              Sao tăng dần
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange("star-desc")}>
              Sao giảm dần
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {paginatedList.map((hotel) => (
        <div
          key={hotel.id}
          className="md:flex md:items-stretch w-full min-h-50 border-gray-200 shadow-lg rounded-lg"
        >
          <Link
            className="md:w-[80%] w-full md:flex"
            href={`hotel/${hotel.slug}`}
          >
            <div className="md:w-1/3 w-full aspect-[2/1]">
              <div className="relative w-full h-full">
                <Image
                  className="md:rounded-l-lg"
                  src={hotel.thumbnail}
                  alt="Ảnh khách sạn"
                  fill
                  unoptimized
                />
              </div>
            </div>
            <div className=" border-gray-50 md:flex md:flex-col justify-between p-4 space-y-1 md:w-2/3">
              <div className="items-center space-x-4 space-y-2">
                <h2 className="text-lg font-semibold">{hotel.name} </h2>
                <span className="flex space-x-2">
                  {[...Array(hotel.star)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                  {[...Array(5 - hotel.star)].map((_, i) => (
                    <Star
                      key={`empty-${i}`}
                      className="w-4 h-4 text-gray-300 fill-gray-300"
                    />
                  ))}
                </span>
              </div>
              <div className="bg-gray-100 p-2 flex space-x-2">
                <MapPin />
                <p className=""> {hotel.address}</p>
              </div>
              <p></p>
            </div>
          </Link>
          <div className="py-5 px-2 md:w-[20%] space-y-4 bg-gray-200 md:rounded-r-lg items-center flex flex-col justify-end">
            <div className=" text-md items-center flex flex-col">
              Giá mỗi đêm
              <h3
                className={`${
                  hotel.promotionPrice
                    ? "line-through"
                    : "text-red-500 font-bold"
                }`}
              >
                {" "}
                {formatPrice(hotel.price)}
              </h3>
              {hotel.promotionPrice ? (
                <h3 className="text-red-500 font-bold">
                  {formatPrice(hotel.promotionPrice)}
                </h3>
              ) : undefined}
              <p className="italic text-xs tracking-tight my-1 text-center">
                Giá chưa bao gồm thuế và phí
              </p>
            </div>
            <OfferNowButton id={hotel.id} type="hotel" />
          </div>
        </div>
      ))}
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
  );
}
