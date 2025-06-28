import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getHotelById } from "@/lib/bookingStorage";
export default function HotelCard({ id, onRemove }: { id: number; onRemove: (index: number) => void }) {

    const hotel = getHotelById(id);
    return (
        <Card>
            <CardHeader className="flex justify-between ids-start pb-2">
                <CardTitle>{hotel?.name}</CardTitle>
                <Button variant="ghost" type="button" size="sm" onClick={() => onRemove(id)}>❌</Button>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
                <p>📍 Địa chỉ: {hotel?.address}</p>
                <p>🕐 Giờ mở cửa: {hotel?.openTime}</p>
            </CardContent>
            <CardFooter className="pb-4 px-2">
                <p className="text-red-500 font-semibold">{hotel?.price} VND</p>
            </CardFooter>
        </Card>
    );
}
