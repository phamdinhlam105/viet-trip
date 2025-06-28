import TopBanner from "@/components/site-page/top-banner";

export default function LienHe() {

    return <div>
        <TopBanner />
        <div className="md:flex justify-center space-x-6 md:p-[10%] px-4 items-stretch">
            <div className="text-center space-y-4 p-5 md:w-1/4">
                <h2 className="font-bold">Thông tin liên hệ</h2>
                <p>
                    Điện thoại: 084 246 6868<br />
                    Hotline: 091 494 3366
                </p>
                <p>nhatrangdulich.vn@gmail.com</p>
            </div>
            <div className="text-center space-y-4 p-5 md:w-1/4">
                <h2 className="font-bold">Ghé thăm văn phòng chúng tôi</h2>
                <p>
                    135/8 Nguyễn Thái Học, Nha Trang, Khánh Hòa
                </p>
                <p>Bản đồ chỉ dẫn</p>
            </div>
            <div className="text-center space-y-4 p-5 md:w-1/4">
                <h2 className="font-bold">Liên hệ làm đối tác ?</h2>
                <p>
                    Nếu bạn quan tâm đến việc trở thành đối tác, liên hệ với chúng tôi qua mail.
                </p>
                <p>nhatrangdulich.vn@gail.com</p>
            </div>
        </div>
    </div>
}