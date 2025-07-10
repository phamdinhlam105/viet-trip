import TopBanner from "@/components/site-page/top-banner";

export default function LienHe() {

    return <div className="md:pt-28 pt-20">
        <TopBanner breadcrumbs={[{ title: 'Liên hệ', slug: '/lien-he' }]} />
        <div className="md:flex justify-center space-x-6 md:p-[10%] px-4 items-stretch">
            <div className="text-center space-y-4 p-5 md:w-1/3">
                <h2 className="font-bold">Thông tin liên hệ</h2>
                <p>
                    Điện thoại: 084 246 6868<br />
                    Hotline: 091 494 3366
                </p>
                <a href="#" className="hover:underline hover:text-blue-400">viettriptour79@gmail.com</a>
            </div>
            <div className="text-center space-y-4 p-5 md:w-1/3">
                <h2 className="font-bold">Ghé thăm văn phòng chúng tôi</h2>
                <p>
                    135/8 Nguyễn Thái Học, Nha Trang, Khánh Hòa
                </p>
                <a href="#" className="hover:underline hover:text-blue-400">Bản đồ chỉ dẫn</a>
            </div>
            <div className="text-center space-y-4 p-5 md:w-1/3">
                <h2 className="font-bold">Liên hệ làm đối tác ?</h2>
                <p>
                    Nếu bạn quan tâm đến việc trở thành đối tác, liên hệ với chúng tôi qua mail.
                </p>
                <a href="#" className="hover:underline hover:text-blue-400">viettriptour79@gmail.com</a>
            </div>
        </div>
    </div>
}