"use client";

import { useEffect, useState } from "react";
import { Combo } from "../models/app-models";
import SectionHeader from "../section-header/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ComboItem from "./combo-item";

export default function ComboSection() {
  const [data, setData] = useState<Combo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await getAllCombo();
    //   if (result) {
    //     setData(result);
    setIsLoading(false);
    setData([]);
    //   } else toast.error("Không thể tải Combo vui lòng thử lại");
    // };
    // fetchData();
  }, []);

  const groupIntoPairs = (array: Combo[]): [Combo, Combo][] => {
    const result: [Combo, Combo][] = [];

    for (let i = 0; i < array.length; i += 2) {
      // đảm bảo item[i + 1] tồn tại
      if (array[i + 1]) {
        result.push([array[i], array[i + 1]]);
      } else {
        result.push([array[i], array[i]]); // hoặc xử lý khác tùy ý
      }
    }

    return result;
  };
  const comboPairs = groupIntoPairs(data);

  return (
    <div className="space-y-4">
      <SectionHeader title="Combo Hot" link="/combo" more="Xem tất cả Combo"/>
      {data.length == 0 ? (
        "Hiện tại chưa có combo"
      ) : (
        <Carousel className="w-full">
          <CarouselContent className="snap-x">
            {isLoading
              ? "Đang tải dữ liệu"
              : comboPairs.map((item) => (
                  <CarouselItem
                    className="md:basis-[25%] space-y-4 py-5 snap-start"
                    key={item[0].id}
                  >
                    <ComboItem
                      id={item[0].id}
                      name={item[0].name}
                      tourName={item[0].tourName}
                      hotelName={item[0].hotelName}
                      applyDate={item[0].applyDate}
                      endDate={item[0].endDate}
                      transportation={item[0].transportation}
                      price={item[0].price}
                    />
                    <ComboItem
                      id={item[1].id}
                      name={item[1].name}
                      tourName={item[1].tourName}
                      hotelName={item[1].hotelName}
                      applyDate={item[1].applyDate}
                      endDate={item[1].endDate}
                      transportation={item[1].transportation}
                      price={item[1].price}
                    />
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
