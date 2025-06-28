import NewsInformtion from "@/components/news-page/news-information";
import NewsSideBar from "@/components/news-page/news-sidebar";
import { notFound } from "next/navigation";

const NEWS = {
    id: 1,
    slug: '11-dia-diem-du-lich-nhat-ban-dep-nhat-mua-he-thang-7-8',
    title: '11 địa điểm du lịch Nhật Bản đẹp nhất mùa hè tháng 7-8',
    createAt: '26/06/2025',
    description: 'Du lịch Nhật Bản tháng 7, tháng 8 không chỉ có những trải nghiệm lễ hội mùa hè sôi động tại các thành phố lớn như Tokyo, Osaka mà còn là cơ hội khám phá vẻ đẹp thanh bình của các ngôi đền cổ và khung cảnh núi non hùng vĩ như núi Phú Sĩ. Cùng khám phá những địa điểm du lịch Nhật Bản tháng 7 8 nổi bật nhất, để chuyến đi của bạn mùa hè này thật ý nghĩa và khó quên.',
    content: `<p>Mùa hè Nhật Bản trong khoảng tháng 7-8 mang đến một bức tranh sống động, đậm màu lễ hội, ánh nắng rực rỡ và sắc xanh mát lành của thiên nhiên. Đây là thời gian lý tưởng để du lịch Nhật Bản, hòa mình vào những trải nghiệm đa dạng, từ những phố thị nhộn nhịp cho đến cảnh quan thiên nhiên tuyệt mỹ.</p>

<h2 style="font-size: 1.5rem; font-weight: bold;">1. Địa điểm du lịch Tokyo mùa hè</h2>

<h3 style="font-size: 1.5rem; font-weight: bold;">1.1. Giao lộ Shibuya</h3>
<img src="/news/shibuya.png" />
<p style="text-align:center; font-style: italic;">Giao lộ Shibuya nhộn nhịp và đầy màu sắc dưới ánh nắng vàng rực rỡ của mùa hè Tokyo. (Ảnh: Shibuya Shoot)</p>
<p>Giữa cái nắng vàng rực của mùa hè Tokyo, giao lộ Shibuya như một tấm thảm sôi động đầy sắc màu...</p>
<p>Bạn có thể hòa mình vào dòng người đông đúc, dạo quanh các cửa hàng thời trang thời thượng...</p>

<h3 style="font-size: 1.5rem; font-weight: bold;">1.2. Chùa Sensoji</h3>
<img src="/news/sensoji.png" />
<p style="text-align:center; font-style: italic;">Không gian thanh tịnh tại chùa Sensoji, nơi bạn có thể cảm nhận nét văn hóa truyền thống giữa lòng Tokyo hiện đại. (Ảnh: Sưu tầm)</p>
<p>Bước chân vào chùa Sensoji (Asakusa Kannon)...</p>
<p>Vào những ngày hè oi bức, hình ảnh các bạn trẻ mặc áo Yukata tung tăng...</p>

<p><strong>&gt;&gt;</strong> Tham khảo <a href="/tour/tour-3-dao-cano" style="font-weight: bold; color: #1d4ed8; text-decoration: underline;">tour du lịch Nhật Bản: Osaka - Kobe - Kyoto - Nagoya - Công viên Hamamatsu - Oshino Hakkai -Núi Phú Sĩ - Tokyo | Thưởng thức bò Kobe | Trải nghiệm Shinkansen & Trà Đạo (5N4Đ)</a></p>

<h2 style="font-size: 1.5rem; font-weight: bold;">2. Địa điểm du lịch Kyoto mùa hè</h2>

<h3 style="font-size: 1.5rem; font-weight: bold;">2.1. Đền Fushimi Inari</h3>
<img src="/news/fushimi.png" />
<p style="text-align:center; font-style: italic;">Hàng nghìn cổng torii đỏ rực rỡ trải dài tạo nên hành trình linh thiêng... (Ảnh: Sưu tầm)</p>
<p>Khi nắng hè chiếu rọi, hàng nghìn cổng torii đỏ chói tại đền Fushimi Inari...</p>

<h3 style="font-size: 1.5rem; font-weight: bold;">2.2. Phố cổ Gion</h3>
<img src="/news/gion.png" />
<p style="text-align:center; font-style: italic;">Những con phố cổ Gion thơ mộng... (Ảnh: Sưu tầm)</p>
<p>Gion là nơi mà mùa hè trở nên thơ mộng hơn...</p>

<h2 style="font-size: 1.5rem; font-weight: bold;">3. Địa điểm du lịch Kobe mùa hè</h2>

<h3 style="font-size: 1.5rem; font-weight: bold;">3.1. Bảo tàng rượu Sake Hakutsuru</h3>
<img src="/news/sake.png" />
<p style="text-align:center; font-style: italic;">Trải nghiệm quy trình làm sake truyền thống... (Ảnh: Sưu tầm)</p>
<p>Bảo tàng rượu Sake Hakutsuru mang đến cho bạn cái nhìn sâu sắc về nghệ thuật làm sake...</p>

<h2 style="font-size: 1.5rem; font-weight: bold;">4. Du lịch núi Phú Sĩ mùa hè và làng Oshino Hakkai</h2>

<h3 style="font-size: 1.5rem; font-weight: bold;">4.1. Núi Phú Sĩ</h3>
<img src="/news/phu-si.png" />
<p style="text-align:center; font-style: italic;">Leo núi Phú Sĩ mùa hè, đắm chìm trong biển mây huyền ảo. (Ảnh: Sưu tầm)</p>
<p>Tháng 7 và 8 là mùa mở cửa cho những người đam mê leo núi chinh phục đỉnh Phú Sĩ...</p>
<p><strong>&gt;&gt;</strong> Tham khảo tour du lịch Nhật Bản: Osaka - Kobe - Kyoto - Nagoya - Công viên Hamamatsu...</p>

<h3 style="font-size: 1.5rem; font-weight: bold;">4.2. Làng cổ Oshino Hakkai</h3>
<img src="/news/oshino.png" />
<p style="text-align:center; font-style: italic;">Làng Oshino Hakkai thanh bình với suối nước trong vắt... (Ảnh: Sưu tầm)</p>
<p>Nằm gần chân núi Phú Sĩ, làng Oshino Hakkai như một ốc đảo yên bình...</p>

<h2 style="font-size: 1.5rem; font-weight: bold;">5. Những điểm đến khác</h2>

<h3 style="font-size: 1.5rem; font-weight: bold;">5.1. Lâu đài Osaka</h3>
<img src="/news/osaka.png" />
<p style="text-align:center; font-style: italic;">Lâu đài Osaka rực rỡ dưới ánh nắng mùa hè... (Ảnh: Sưu tầm)</p>
<p>Lâu đài Osaka rực rỡ trong ánh nắng, được bao quanh bởi hồ nước và công viên xanh mát...</p>

<h3 style="font-size: 1.5rem; font-weight: bold;">5.2. Công viên Hamamatsu</h3>
<img src="/news/Hamamatsu .png" />
<p style="text-align:center; font-style: italic;">Công viên Hamamatsu - Điểm trải nghiệm mùa hè tuyệt vời ít người biết đến. (Ảnh: Sưu tầm)</p>
<p>Công viên Hamamatsu không chỉ là nơi bạn có thể thư giãn giữa thiên nhiên xanh mướt...</p>

<p>Những địa điểm du lịch Nhật Bản tháng 7 8 gợi ý ở trên đều mang một vẻ đẹp riêng biệt...</p>

<p>Để biết thêm thông tin về chương trình, Quý khách hàng vui lòng liên hệ:<br />
<strong>VIETTRIP TOURIST</strong><br />
135/8 Nguyễn Thái Học, Vạn Thạnh, TP. Nha Trang, Khánh Hoà<br />
Tel: 091 494 3366 - 084 246 6868<br />
Fanpage: <a href="#" style="color: #1d4ed8; text-decoration: underline;" target="_blank">https://www.facebook.com/viettrip</a><br />
Website: <a href="#" style="color: #1d4ed8; text-decoration: underline;" target="_blank">www.viettrip.com.vn</a></p>

<p style="font-style: italic;">Nguồn bài viết: Sưu tầm và tổng hợp<br />
@camnangdulich #camnangdulich</p>

`
}


export function generateStaticParams() {
  return {
    slug: NEWS.slug,
  };
}


export default function NewsDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // 🔒 Dữ liệu thực tế sẽ được thay vào đây
    const hotel = NEWS?.slug === slug ? NEWS : null;

    if (!hotel) {
        return notFound();
    }
    return <div className="md:flex md:px-[5%] px-2 py-4 space-x-2 space-y-10">
        <NewsInformtion {...NEWS} />
        <NewsSideBar />
    </div>
}