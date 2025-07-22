import OfferNowButton from "@/components/site-page/offer-now-button";
import { formatPrice } from "@/lib/formatPrice";

export default function TourSidebarOffer({
  id,
  startingPlace,
  price,
}: {
  id: string;
  startingPlace: string;
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
          Điểm xuất phát: <span className="font-bold">{startingPlace}</span>
        </p>
        <OfferNowButton id={id} type="tour" />
      </div>
      <div className="space-y-2">
        {/*<p className="mb-4">{description}</p>*/}
        <h2 className="text-lg font-semibold">Tags:</h2>
        <p className="text-gray-500">#tour_đảo, #tour_cano, #tour_nhatrang</p>
      </div>
    </div>
  );
}
