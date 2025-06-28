import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getComboById } from "@/lib/bookingStorage";
export default function ComboCard({ id, onRemove }: { id: number; onRemove: (index: number) => void }) {

  const combo = getComboById(id);

  return (
    <Card>
      <CardHeader className="flex justify-between ids-start pb-2">
        <CardTitle>{combo?.name}</CardTitle>
        <Button variant="ghost" type="button" size="sm" onClick={() => onRemove(id)}>❌</Button>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        <p>🎟 Áp dụng từ: {combo?.applyDate}</p>
        <p>🌐 Gồm tour ID: {combo?.idTour}, khách sạn ID: {combo?.idHotel}</p>
      </CardContent>
      <CardFooter>
        <p className="text-red-500 font-semibold">Giá combo: {combo?.price} VND</p>
      </CardFooter>
    </Card>
  );
}
