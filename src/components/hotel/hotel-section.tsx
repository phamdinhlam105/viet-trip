"use client";
import { useEffect, useState } from "react";
import SectionHeader from "../section-header/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import HotelItem from "./hotel-item";
import { getAllHotel } from "../api/hotel-api";
import { toast } from "sonner";
import { Hotel } from "../models/app-models";

export default function HotelSection() {
  const [data, setData] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllHotel();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast.error("Không thể tải khách sạn vui lòng thử lại");
    };
    fetchData();
  }, []);
  return (
    <div>
      <SectionHeader
        title="Khách sạn Nha Trang giá tốt"
        describe="Khách sạn Nha Trang được khách hàng quan tâm lựa chọn nhiều nhất hiện tại"
        link="/hotel"
        more="Xem tất cả Khách sạn"
      />
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <Carousel className=" w-full" orientation="horizontal">
          <CarouselContent className="snap-x">
            {data.map((item) => (
              <CarouselItem
                className="snap-start md:basis-[33%] py-5"
                key={item.id}
              >
                <HotelItem {...item} />
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
