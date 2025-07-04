import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getComboById, getHotelById, getTourById } from "@/lib/bookingStorage";
import { formatPrice } from "@/lib/formatPrice";
export default function ComboCard({ id, onRemove }: { id: string; onRemove: (index: string, type: string) => void }) {

  const combo = getComboById(id);

  if (!combo) {
    return (
      <Card>
        <CardHeader className="flex justify-between items-start pb-2">
          <CardTitle>Combo không tồn tại</CardTitle>
          <Button variant="ghost" type="button" size="sm" onClick={() => onRemove(id, 'combo')}>
            ❌
          </Button>
        </CardHeader>
        <CardContent className="text-sm text-gray-600">
          <p>Dữ liệu combo không khả dụng.</p>
        </CardContent>
      </Card>
    );
  }

  const tour = getTourById(combo.idTour);
  const hotel = getHotelById(combo.idHotel);
  return (
    <Card>
      <CardHeader className="flex justify-between ids-start pb-2">
        <CardTitle>{combo?.name}</CardTitle>
        <Button variant="ghost" type="button" size="sm" onClick={() => onRemove(id, 'combo')}>❌</Button>
      </CardHeader>
      <CardContent className="text-sm text-gray-600 px-2">
        <p>📅 Áp dụng từ: <span className="font-semibold">{combo?.applyDate}</span></p>
        <h3 className="font-bold py-3">📦Bao gồm:</h3>
        <ul className="space-y-2">
          <li className="space-y-2">
            <h3 className="text-md">🗺️  Tour: <span className="font-semibold">{tour?.name}</span></h3>
            <p> 📍   Hành trình: <span className="font-semibold">{tour?.schedule}</span></p>
          </li>
          <li className="space-y-2">
            <h3>🏨 Khách sạn: <span className="font-semibold">{hotel?.name}</span></h3>
            <p>📌 Địa chỉ: <span className="font-semibold">{hotel?.address}</span></p>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="pb-4 px-2">
        <p className="text-red-500 font-semibold"> {formatPrice(combo?.price)}</p>
      </CardFooter>
    </Card>
  );
}
