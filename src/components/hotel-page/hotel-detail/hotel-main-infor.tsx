
export default function HotelMainInformation({ mainFeature, address, food, suitablePerson, openTime, transportation, promotion }: {
    mainFeature: string,
    address: string,
    food: string,
    suitablePerson: string,
    openTime: string,
    transportation: string,
    promotion: string
}) {

    return <div className="py-5">
        <div className="bg-gray-200 p-2 rounded-lg">
            <h2 className="text-lg font-semibold py-4 bg-gradient-to-r from-[#0E5AA4] to-[#269F8C] bg-clip-text text-transparent">
                Điểm nhấn của khách sạn:
            </h2>

            <p>{mainFeature}</p>
        </div>
        <div className="py-5 px-2 space-y-2">
            <h2 className="text-center font-bold text-2xl">THÔNG TIN THÊM VỀ CHUYẾN ĐI</h2>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h3 className="font-semibold py-2">
                        Địa chỉ:
                    </h3>
                    <p className="text-sm">
                        {address}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold py-2">
                        Ẩm thực:
                    </h3>
                    <p className="text-sm">
                        {food}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold py-2">
                        Đối tượng thích hợp:
                    </h3>
                    <p className="text-sm">
                        {suitablePerson}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold py-2">
                        Thời gian mở cửa:
                    </h3>
                    <p className="text-sm">
                        {openTime}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold py-2">
                        Đưa đón:
                    </h3>
                    <p className="text-sm">
                        {transportation}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold py-2">
                        Khuyến mãi:
                    </h3>
                    <p className="text-sm">
                        {promotion}
                    </p>
                </div>
            </div>
        </div>
    </div>
}