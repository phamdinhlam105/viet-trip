"use client";
import { getAllTour } from "@/components/api/tour-api";
import { Tour } from "@/components/models/app-models";
import TourItem from "@/components/tour/tour-item";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function RelatedTour({ id }: { id: string }) {
  const [data, setData] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllTour();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast("Không thể tải dữ liệu");
    };
    fetchData();
  },[]);
  const otherTours = data.filter((tour) => tour.id !== id);
  const randomTours = otherTours.sort(() => Math.random() - 0.5).slice(0, 3);
  return (
    <div className="py-4">
      <h2 className="font-bold text-2xl text-center">CÁC CHƯƠNG TRÌNH KHÁC</h2>
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 py-10 px-2">
          {randomTours.map((item) => (
            <div key={item.id} className="h-full">
              <TourItem {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
