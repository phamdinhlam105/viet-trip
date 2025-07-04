import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTourById } from "@/lib/bookingStorage";
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";

export default function TourCard({ id, onRemove }: { id: string; onRemove: (index: string, type: string) => void }) {
    const tour = getTourById(id)
    return (
        <Card className="w-full p-0">
            <CardHeader className="flex justify-between items-center p-2">
                <CardTitle className="px-2">{tour?.name}</CardTitle>
                <Button variant="ghost" type="button" size="sm" className="w-1/5" onClick={() => onRemove(id, 'tour')}>❌</Button>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-3 px-2">
                <div className="w-full aspect-[2/1] relative">
                    {tour && <Image src={tour?.thumbnail} alt={""} fill />}
                </div>

                <p>🗓 Lịch trình: <span className="font-semibold">{tour?.schedule}</span></p>
                <p>🕐 Khởi hành: <span className="font-semibold">{tour?.availableTime}</span></p>
            </CardContent>
            <CardFooter className="pb-4 px-2">
                <p className="text-red-500 font-semibold">  {formatPrice(tour?.price)} </p>
            </CardFooter>
        </Card>
    );
}
