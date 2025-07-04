import React from 'react';

export default function RoomPriceTable({ roomDetails }:{
    roomDetails:{
        id:string,
        name:string,
        included:string,
        bedInfo:string,
        price:string
    }[]
}) {
  return (
    <div className="overflow-x-auto">
     <table className="min-w-full border border-gray-500">
  <thead className="bg-gray-100">
    <tr>
      <th className="border px-4 py-2 text-left">Hạng phòng</th>
      <th className="border px-4 py-2 text-left">Giường & Sức chứa</th>
      <th className="border px-4 py-2 text-left">Dịch vụ đi kèm</th>
      <th className="border px-4 py-2 text-left">Giá phòng (VND)</th>
    </tr>
  </thead>
  <tbody>
    {roomDetails.map(room => (
      <tr key={room.id}>
        <td className="border px-4 py-2 text-sm font-semibold">{room.name}</td>
        <td className="border px-4 py-2 text-sm">{room.bedInfo}</td>
        <td className="border px-4 py-2 text-sm">{room.included}</td>
        <td className="border px-4 py-2 font-semibold text-red-600 text-sm">
           {parseInt(room.price).toLocaleString('vi-VN')}
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}
