import OfferNowButton from "@/components/site-page/offer-now-button";


export default function TourSidebarOffer({ id, price, description }: { id: string, price: string, description: string }) {

    return <div className="space-y-2 sticky top-32">
        <div className="p-4 space-y-2 rounded-lg shadow-lg border border-gray-200">
            <h2><span className="text-2xl font-bold text-red-500">{price} đ</span>/ người lớn</h2>
            <p>Mã chương trình: <span className="font-bold">{id}</span></p>
            <OfferNowButton id={parseInt(id)} type="tour" />
        </div>
        <div className="space-y-2">
            <p className="mb-4">{description}</p>
            <h2 className="text-lg font-semibold">Tags:</h2>
            <p className="text-gray-500">#tour_đảo, #tour_cano, #tour_nhatrang</p>
        </div>
    </div>
}