import { Tour } from "@/components/models/app-models";
import { generateTourStaticParams } from "@/components/static-params/generate-params";
import TourMainInformation from "@/components/tourpage/tour-infor-page/main-infor";
import NoticeInformation from "@/components/tourpage/tour-infor-page/notice-infor";
import RelatedTour from "@/components/tourpage/tour-infor-page/related-tour";
import TourDetailGallery from "@/components/tourpage/tour-infor-page/tour-gallery";
import TourSchedule from "@/components/tourpage/tour-infor-page/tour-schedule";
import TourSidebarOffer from "@/components/tourpage/tour-infor-page/tour-side-offer";
import { notFound } from "next/navigation";

export const generateStaticParams = generateTourStaticParams;
// 🔧 Tạm tour giả để demo (bạn sẽ xóa và thay bằng dữ liệu thực sau này)
const mockTour: Tour | null = {
    id: '1',
    slug: "tour-3-dao-cano",
    name: "Tour 3 Đảo Cano",
    description: "Khám phá bãi biển Nha Trang xinh đẹp và những hòn đảo tuyệt vời.",
    price: '450.000',
    images: ["/tour/lang-chai.jpg", "/tour/hon-mun.jpg", "/homepage/tour.jpg", "/homepage/tour.jpg", "/tour/lang-chai.jpg"],
    additionalDetail: {
        mainFeature: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        location: 'Nha Trang',
        food: 'Cơm trưa À La Carte',
        suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
        idealTime: 'Quanh năm',
        transportation: 'Xe du lịch, Cano',
        promotion: 'Ưu đãi đã bao gồm trong giá tour'
    },
    schedule: ['Hòn Mun', 'Làng Chài', 'Bãi Tranh'],
    scheduleDetail: `<p><strong>8h45 - 9h15:</strong> Xe và HDV của công ty du lịch Đan Phát đón quý khách tại điểm hẹn trong thành phố. Sau đó tiếp tục hành trình đi đến cảng Cầu Đá.</p>
<p><strong>9h45:</strong> Sau khi đến cảng, HDV hướng dẫn quý khách lên tàu cano cao tốc, bắt đầu khởi hành cho chuyến đi về với biển, lịch trình tham quan chính thức bắt đầu.</p>
<p><strong>10h00:</strong> Sau khi vượt sóng để đến với điểm lặn biển của chúng ta – Hòn Mun, cũng là khu bảo tồn biển lớn nhất Việt Nam. Chính thức bắt đầu hành trình với điểm lặn ngắm san hô đầu tiên, chắc hẳn du khách sẽ choáng ngợp trước vẻ đẹp kỳ ảo của thế giới đại dương nhiều màu sắc với hơn 800 loài san hô và 190 loài cá.</p>
<p>Du khách đến đây chủ yếu tham gia 3 hoạt động:</p>
<ul>
  <li>Tắm biển (Quý khách bắt buộc phải mặc áo phao và có thể thuê kính tắm để ngắm san hô).</li>
  <li>Đi tàu đáy kính (Đây là dịch vụ tại đảo, quý khách tự túc mua vé).</li>
  <li>Lặn biển bằng bình Oxy có thợ lặn lặn kèm (Đây là dịch vụ nổi bật nhất tại Hòn Mun, quý khách sẽ có cơ hội trải nghiệm cảm giác hòa mình vào lòng đại dương và tận tay sờ vào những loài san hô quý hiếm. Quý khách nên đăng ký dịch vụ lặn biển trước với chúng tôi).</li>
</ul>
<p><strong>11h30:</strong> Tạm biệt Hòn Mun, Quý khách sẽ tiếp tục di chuyển đến địa điểm thứ 2 – Làng Chài.</p>
<p>So với một Hòn Mun đa dạng sắc màu thì Làng Chài tại vịnh Nha Trang yên bình và nhẹ nhàng hơn rất nhiều. Tại đây, du khách sẽ có cơ hội được tham quan một hệ thống bè nuôi trồng hải sản có quy mô lớn bậc nhất tại Vịnh.</p>
<p>Sau một chuyến đi dài vào buổi sáng, lúc này, du khách đã bắt đầu cảm thấy mệt mỏi và mất sức. Đoàn về nhà hàng Đan Phát tại Làng Chài, thưởng thức một bữa ăn dân dã nhưng thơm ngon chắc chắn sẽ làm hài lòng vị giác của Quý Khách.</p>
<p>Thông thường, thực đơn của Quý Khách sẽ bao gồm những món ăn hải sản hấp dẫn như: cá hấp hành gừng, tôm thịt ram mặn, trứng chiên, chả cá, rau xào tỏi, cơm trắng và trái cây tráng miệng.</p>
<p><strong>12h30:</strong> Dùng cơm trưa, nghỉ ngơi xong Đoàn tiếp tục hành trình, di chuyển đến khu vực Bãi Tranh – Bãi Tranh là một điểm du lịch nằm trên Hòn Miễu và gần Bãi Sạn. Đến với Bãi Tranh quý khách sẽ được:</p>
<ul>
  <li>Đắm mình giữa biển xanh với làn nước trong vắt và bãi biển đẹp.</li>
  <li>Các tiện ích bãi biển miễn phí: ghế ngồi, bãi tắm.</li>
  <li>Tham gia những môn thể thao nước (có trả phí) như chèo thuyền Kayak, dù bay, mô tô nước...</li>
  <li>Tắm nước ngọt (có phí)</li>
</ul>
<p><strong>15h30:</strong> Cano cao tốc của Đan Phát Tour sẽ đưa Quý Khách quay trở lại với đất liền, sau đó, xe và hướng dẫn viên đưa Quý Khách về khách sạn. Qua đó, kết thúc hành trình du lịch hấp dẫn và thú vị của mình tại Nha Trang.</p>
`,
}
export default function TourDetail({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // 🔒 Dữ liệu thực tế sẽ được thay vào đây
    const tour = mockTour?.slug === slug ? mockTour : null;

    if (!tour) {
        return notFound();
    }

    return (
        <div className="md:px-[5%]">
            <div className="px-2 py-10 md:flex space-x-4">
                <div className="md:w-3/4 w-full">
                    <h1 className="text-3xl font-bold mb-4">{tour.name}</h1>
                    <TourDetailGallery images={tour.images} />
                    <TourMainInformation {...tour.additionalDetail} />
                    <TourSchedule {...tour} />
                    <NoticeInformation />
                </div>
                <div className="md:w-1/4 md:relative">
                    <TourSidebarOffer {...tour} />
                </div>
            </div>
            <RelatedTour />
        </div>
    );
}
