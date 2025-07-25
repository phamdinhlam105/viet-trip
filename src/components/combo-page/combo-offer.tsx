import OfferNowButton from "@/components/site-page/offer-now-button";
import { formatPrice } from "@/lib/formatPrice";

export default function ComboSidebarOffer({
  id,
  hotelName,
  schedule,
  price,
}: {
  id: string;
  hotelName: string | undefined;
  schedule: string | undefined;
  price: string;
}) {
  return (
    <div className="space-y-2 sticky top-32">
      <div className="p-4 space-y-2 rounded-lg shadow-lg border border-gray-200">
        <h2>
          <span className="text-2xl font-bold text-red-500">
            {formatPrice(parseInt(price).toString())}
          </span>
        </h2>
        <p>
          Lịch trình: <span className="font-bold">{schedule}</span>
        </p>
          <p>
          Khách sạn: <span className="font-bold">{hotelName}</span>
        </p>
        <OfferNowButton id={id} type="combo" />
      </div>
    </div>
  );
}
