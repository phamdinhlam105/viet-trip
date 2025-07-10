"use client"

import NewsList from "@/components/news-page/news-list";
import TopBanner from "@/components/site-page/top-banner";

const NEWS = [
    {
        id: 1,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
    {
        id: 2,
        href: '/tin-tuc/ngam-vinh-nha-trang-tu-du-thuyen-khong-con-xa-xi-khach-viet-chuong',
        title: 'Ngắm vịnh Nha Trang từ du thuyền không còn xa xỉ, khách Việt chuộng',
        createAt: '26/06/2025',
        thumbnail: '/news/ngam-vinh-nha-trang/ngam-vinh-nha-trang-thumbnail.png',
        description: 'Những năm trở lại đây, loại hình du lịch trên du thuyền, đặc biệt là các tour du thuyền quanh vịnh Nha Trang, ngắm hoàng hôn trở nên hút khách.',
    },
    {
        id: 3,
        href: '/tin-tuc/4-tieng-trai-nghiem-ngam-vinh-nha-trang-tren-du-thuyen',
        title: '4 tiếng trải nghiệm ngắm vịnh Nha Trang trên du thuyền',
        createAt: '26/06/2025',
        thumbnail: '/news/4-tieng-trai-nghiem/4-tieng-trai-nghiem-thumbnail.png',
        description: 'Lên du thuyền ngắm vịnh Nha Trang, du khách có thể tận hưởng trọn vẹn ngắm hoàng minh, tắm, lặn biển, thưởng thức hải sản...chỉ trong 4 tiếng.',
    },
    {
        id: 4,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
    {
        id: 5,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
    {
        id: 6,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
    {
        id: 7,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
    {
        id: 8,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
    {
        id: 9,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
    {
        id: 10,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
]

export default function NewsPage() {

    return <div className="md:pt-28 pt-20">
        <TopBanner breadcrumbs={[{ title: 'Tin tức', slug: '/tin-tuc' }]} />
        <NewsList newsList={NEWS} />
    </div>
}