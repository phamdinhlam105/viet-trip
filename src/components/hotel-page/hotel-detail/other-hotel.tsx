"use client";
import { getAllHotel } from "@/components/api/hotel-api";
import HotelItem from "@/components/homepage/hotel/hotel-item";
import { Hotel } from "@/components/models/app-models";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function OthersHotel({ id }: { id: string }) {
  const [data, setData] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllHotel();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast("Không thể tải dữ liệu");
    };
    fetchData();
  }, []);
  const otherHotels = data.filter((hotel) => hotel.id !== id);
  const randomHotels = otherHotels.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className="py-4">
      <h2 className="font-bold text-2xl text-center">CÁC KHÁCH SẠN KHÁC</h2>
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <div className="md:grid md:grid-cols-3 md:gap-4 md:mx-[10%] space-y-4 py-10 px-2">
          {randomHotels.map((item) => (
            <div key={item.id} className="h-full">
              <HotelItem {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
