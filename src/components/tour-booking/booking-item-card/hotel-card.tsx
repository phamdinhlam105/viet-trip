import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getHotelById } from "@/lib/bookingStorage";
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";

export default function HotelCard({ id, onRemove }: { id: string; onRemove: (index: string, type: string) => void }) {

    const hotel = getHotelById(id);
    return (
        <Card className="w-full p-0">
            <CardHeader className="flex justify-between items-center p-2">
                <CardTitle className="px-2">{hotel?.name}</CardTitle>
                <Button variant="ghost" type="button" size="sm" className="w-1/5" onClick={() => onRemove(id,'hotel')}>❌</Button>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-3 px-2">
                <div className="w-full aspect-[2/1] relative">
                    {hotel && <Image src={hotel?.thumbnail} alt={""} fill />}
                </div>
                <p>📍 Địa chỉ: {hotel?.address}</p>
                <p>🕐 Giờ mở cửa: {hotel?.openTime}</p>
            </CardContent>
            <CardFooter className="pb-4 px-2">
                <p className="text-red-500 font-semibold"> {formatPrice(hotel?.price)}</p>
            </CardFooter>
        </Card>
    );
}
