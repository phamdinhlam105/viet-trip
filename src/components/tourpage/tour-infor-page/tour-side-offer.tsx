import OfferNowButton from "@/components/side-page/offer-now-button";
import { formatPrice } from "@/lib/formatPrice";
import Link from "next/link";

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
            {price ? formatPrice(parseInt(price).toString()) : "Liên hệ"}
          </span>
        </h2>
        <p>
          Điểm xuất phát: <span className="font-bold">{startingPlace}</span>
        </p>
        <OfferNowButton id={id} type="tour" />
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Tags:</h2>
        <p className="text-gray-500 text-wrap">
          <Link href="/tim-kiem?search=tour-dao">#tour_đảo</Link>,{" "}
          <Link href="/tim-kiem?search=tour-cano">#tour_cano</Link>,{" "}
          <Link href="/tim-kiem?search=tour-nha-trang">#tour_nhatrang</Link>,{" "}
          <Link href="/tim-kiem?search=tour-binh-ba">#tour_bình_ba</Link>,{" "}
          <Link href="/tim-kiem?search=vinwonders">#vin_wonders</Link>,{" "}
          <Link href="/tim-kiem?search=tour-binh-hung">#tour_bình_hưng</Link>,{" "}
          <Link href="/tim-kiem?search=lan-bien">#tour_lặn_biển</Link>,{" "}
           <Link href="/tim-kiem?search=tour-dong-cuu">#tour_đồng_cừu</Link>,{" "}
        </p>
      </div>
    </div>
  );
}
