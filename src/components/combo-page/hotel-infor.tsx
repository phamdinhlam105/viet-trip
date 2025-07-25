import { StarIcon } from "lucide-react";

export default function ComboHotelInfor({
  name,
  ultilities,
  address,
  star,
  description,
}: {
  name: string;
  description: string;
  ultilities: string;
  address: string;
  star: number;
}) {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl">THÔNG TIN KHÁCH SẠN</h2>
      <p>
        <span className="font-semibold">Tên khách sạn: </span>
        {name}{" "}
        <span>
          {[0, 1, 2, 3, 4, 5].slice(0, star).map((number) => (
            <StarIcon key={number} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ))}
        </span>
      </p>
      <p>{description}</p>
      <p>
        <span className="font-semibold">Địa chỉ: </span>
        {address}
      </p>
      <p>
        <span className="font-semibold">Tiện ích: </span>
        {ultilities}
      </p>
    </div>
  );
}
