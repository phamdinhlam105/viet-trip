
import TourCard from "./tour-card";
import HotelCard from "./hotel-card";
import ComboCard from "./combo-card";

export function BookingItemCard({ item, onRemove }: { item: unknown; onRemove: (index: number) => void }) {
    const itemData = item as any;
    
    if (itemData.type === "tour") return <TourCard id={itemData.id} onRemove={onRemove} />;
    if (itemData.type === "hotel") return <HotelCard id={itemData.id} onRemove={onRemove} />;
    if (itemData.type === "combo") return <ComboCard id={itemData.id} onRemove={onRemove} />;
    return null;
}
