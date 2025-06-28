
import TourCard from "./tour-card";
import HotelCard from "./hotel-card";
import ComboCard from "./combo-card";

export function BookingItemCard({ item, onRemove }: { item: any; onRemove: (index: number) => void }) {
    if (item.type === "tour") return <TourCard id={item.id} onRemove={onRemove} />;
    if (item.type === "hotel") return <HotelCard id={item.id} onRemove={onRemove} />;
    if (item.type === "combo") return <ComboCard id={item.id} onRemove={onRemove} />;
    return null;
}
