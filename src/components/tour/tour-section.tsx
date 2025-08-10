"use client";
import { useEffect, useState } from "react";
import { Tour } from "../models/app-models";
import SectionHeader from "../section-header/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import TourItem from "./tour-item";
import { getAllTour } from "../api/tour-api";
import { toast } from "sonner";

export default function TourSection() {
  const [data, setData] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllTour();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast.error("Không thể tải tour vui lòng thử lại");
    };
    fetchData();
  }, []);
  return (
    <div>
      <SectionHeader title="Tour Nha Trang Hot" link="/tour" more="Xem tất cả Tour"/>
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <Carousel className=" w-full" orientation="horizontal">
          <CarouselContent className="snap-x items-stretch">
            {data.map((item) => (
              <CarouselItem
                className="snap-start md:basis-[33%] py-5 flex"
                key={item.id}
              >
                <TourItem {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-10 w-10 hidden sm:flex" />
          <CarouselNext className="h-10 w-10 hidden sm:flex" />
        </Carousel>
      )}
    </div>
  );
}
