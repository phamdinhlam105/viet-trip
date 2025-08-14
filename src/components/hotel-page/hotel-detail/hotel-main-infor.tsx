import RoomPriceTable from "./room-price";

export default function HotelMainInformation({
  description,
  content,
  ultilities,
  roomDetails,
}: {
  description: string;
  content: string;
  ultilities: string;
  roomDetails: {
    id: string;
    name: string;
    included: string;
    price: string;
    capacity: string;
  }[];
}) {
  return (
    <div className="py-5">
      <div className="bg-gray-200 p-2 rounded-lg">
        <h2 className="text-lg font-semibold py-4 bg-gradient-to-r from-[#0E5AA4] to-[#269F8C] bg-clip-text text-transparent">
          Điểm nhấn của khách sạn:
        </h2>
        <ul className="list-disc space-y-2 px-4">
          <li>
            <p>{description}</p>
          </li>
          <li>
            <p>
              {" "}
              <span className="font-semibold">Các tiện ích nổi bật: </span>
              {ultilities}
            </p>
          </li>
        </ul>
      </div>
      <div className="py-5 px-2 space-y-4">
        <h2 className="text-center font-bold text-2xl">BẢNG GIÁ PHÒNG</h2>
        <RoomPriceTable
          roomDetails={roomDetails.sort(
            (a, b) => parseInt(a.price) - parseInt(b.price)
          )}
        />
      </div>
      <div className="py-5 px-2 space-y-2 bg-gray-200 rounded-lg">
        <h2 className="text-center font-bold text-2xl">
          THÔNG TIN THÊM VỀ KHÁCH SẠN
        </h2>
        <div
          className="space-y-3"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
