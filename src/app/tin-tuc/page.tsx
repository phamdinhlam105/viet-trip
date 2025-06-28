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
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
    },
    {
        id: 3,
        title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
        createAt: '27/05/2025',
        description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
        href: `/tin-tuc/11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8`,
        thumbnail: "/news/nhat-ban.jpg"
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

    return <div>
        <TopBanner />
        <NewsList newsList={NEWS} />
    </div>
}