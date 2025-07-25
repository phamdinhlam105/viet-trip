import { useEffect, useState } from "react";
import ComboItem from "../combo/combo-item";
import { Combo } from "../models/app-models";
import { getAllCombo } from "../api/combo-api";
import { toast } from "sonner";

export default function OthersCombo({ id }: { id: string }) {
  const [data, setData] = useState<Combo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCombo();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast("Không thể tải dữ liệu");
    };
    fetchData();
  }, []);
  const otherCombos = data.filter((Combo) => Combo.id !== id);
  const randomCombos = otherCombos.sort(() => Math.random() - 0.5).slice(0, 3);
  return (
    <div className="py-4">
      <h2 className="font-bold text-2xl text-center">CÁC CHƯƠNG TRÌNH KHÁC</h2>
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 py-10 px-2">
          {randomCombos.map((item) => (
            <div key={item.id} className="h-full">
              <ComboItem
                id={item.id}
                name={item.name}
                tourName={item.tourName}
                hotelName={item.hotelName}
                applyDate={item.applyDate}
                endDate={item.endDate}
                transportation={item.transportation}
                price={item.price}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
