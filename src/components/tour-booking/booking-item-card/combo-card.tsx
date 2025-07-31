import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTourById } from "@/components/api/tour-api";
import { getHotelById } from "@/components/api/hotel-api";
import { Combo, Hotel, Tour } from "@/components/models/app-models";
import { useEffect, useState } from "react";
import { getComboById } from "@/components/api/combo-api";
export default function ComboCard({
  id,
  onRemove,
}: {
  id: string;
  onRemove: (index: string, type: string) => void;
}) {
  const [tour, setTour] = useState<Tour>();
  const [hotel, setHotel] = useState<Hotel>();
  const [isLoading, setIsLoading] = useState(true);
  const [combo, setCombo] = useState<Combo>();
  const fetchCombo = async () => {
    const result = await getComboById(id);
    if (result) {
      setCombo(result);
      setIsLoading(false);
    }
  };
  const fetchHotel = async (hotelId: string) => {
    const result = await getHotelById(hotelId);
    if (result) {
      setHotel(result);
    }
  };
  const fetchTour = async (tourId: string) => {
    const result = await getTourById(tourId);
    if (result) {
      setTour(result);
    }
  };
  useEffect(() => {
    fetchCombo();
    if (combo?.hotelId != null) fetchHotel(combo.hotelId);
    if (combo?.tourId) fetchTour(combo.tourId);
  }, [id]);

  return (
    <>
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <Card>
          <CardHeader className="flex justify-between ids-start pb-2">
            <CardTitle>{combo?.name}</CardTitle>
            <Button
              variant="ghost"
              type="button"
              size="sm"
              onClick={() => onRemove(id, "combo")}
            >
              ❌
            </Button>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 px-2">
            <p>
              📅 Áp dụng từ:{" "}
              <span className="font-semibold">{combo?.applyDate}</span>
            </p>
            <h3 className="font-bold py-3">📦Bao gồm:</h3>
            <ul className="space-y-2">
              <li className="space-y-2">
                <h3 className="text-md">
                  🗺️ Tour: <span className="font-semibold">{tour?.name}</span>
                </h3>
                <p>
                  {" "}
                  📍 Khởi hành:{" "}
                  <span className="font-semibold">{tour?.startingPlace}</span>
                </p>
              </li>
              <li className="space-y-2">
                <h3>
                  🏨 Khách sạn:{" "}
                  <span className="font-semibold">{hotel?.name}</span>
                </h3>
                <p>
                  📌 Địa chỉ:{" "}
                  <span className="font-semibold">{hotel?.address}</span>
                </p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pb-4 px-2">
            <p className="text-red-500 font-semibold">
              {" "}
              {parseInt(combo?combo.price:"").toLocaleString("vi-VN")}
            </p>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
