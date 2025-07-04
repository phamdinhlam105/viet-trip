
const LASTEST_NEWS = [
    {
        id: 1,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 2,
        title: 'Đồng Cừu Suối Tiên',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 3,
        title: 'Suối Hoa Lan - Điểm Đến Kỳ Thú',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 4,
        title: 'Bốn Bãi Tắm Đẹp – Bình Ba Nha Trang',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 5,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    }
]

const RECENT_VIEW = [
    {
        id: 1,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 2,
        title: 'Mê mẩn trước vẻ đẹp mùa hè Nhật Bản: Khi sắc trời rực rỡ chạm đến cảm xúc',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    },
    {
        id: 3,
        title: 'Mê mẩn trước vẻ đẹp mùa hè Nhật Bản: Khi sắc trời rực rỡ chạm đến cảm xúc',
        link: '/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8'
    }
]


export default function NewsSideBar() {

    return <div className="space-y-10 md:px-2 md:w-1/4">
        <div className="sticky top-30">
            <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-bold">Tin tức mới</h2>
                <ul className="list-disc pl-6 space-y-2">
                    {LASTEST_NEWS.map(item => <li key={item.id}><a href={item.link} className="hover:text-blue-600 hover:underline line-clamp-2"> {item.title}</a></li>)}
                </ul>

            </div>
            <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-bold">Tin tức gần đây</h2>
                <ul className="list-disc pl-6 space-y-2">
                    {RECENT_VIEW.map(item => <li key={item.id}><a href={item.link} className="hover:text-blue-600 hover:underline line-clamp-2"> {item.title}</a></li>)}
                </ul>
            </div>
        </div>

    </div>
}