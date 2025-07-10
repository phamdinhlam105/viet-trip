import NoticeCollapItem from "./notice-collap-item";
import NoticeCollapFixed from "./notice-collaps-fixed";


const cancelCondition = `<ul style="padding-left: 10px;">
  <li>- Được chuyển sang các tuyến du lịch khác trước ngày khởi hành 20 ngày: Không mất chi phí.</li>
  <li>- Nếu hủy hoặc chuyển sang các chuyến du lịch khác ngay sau khi đăng ký từ 15-19 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>50% tiền cọc tour</strong>.</li>
  <li>- Nếu hủy hoặc chuyển sang các chuyến du lịch khác từ 12-14 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>100% tiền cọc tour</strong>.</li>
  <li>- Nếu hủy chuyến du lịch trong vòng từ 08-11 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>50% trên giá tour du lịch</strong>.</li>
  <li>- Nếu hủy chuyến du lịch trong vòng từ 05-07 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>70% trên giá tour du lịch</strong>.</li>
  <li>- Nếu hủy chuyến du lịch trong vòng từ 02-04 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>90% trên giá vé du lịch</strong>.</li>
  <li>- Nếu hủy chuyến du lịch trong vòng 1 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>100% trên giá vé du lịch</strong>.</li>
</ul>
<p><em>Thời gian hủy được tính cho ngày làm việc, không tính Thứ 7, Chủ Nhật và các ngày Lễ, Tết.</em></p>
`
const cancelConditionOnHoliday = `<ul style="padding-left: 5px;">
  <li>- Được chuyển sang các tuyến du lịch khác trước ngày khởi hành 30 ngày: Không mất chi phí.</li>
  <li>- Nếu hủy hoặc chuyển sang các chuyến du lịch khác ngay sau khi đăng ký từ 25-29 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>50% tiền cọc tour</strong>.</li>
  <li>- Nếu hủy hoặc chuyển sang các chuyến du lịch khác từ 20-24 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>100% tiền cọc tour</strong>.</li>
  <li>- Nếu hủy chuyến du lịch trong vòng từ 17-19 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>50% trên giá tour du lịch</strong>.</li>
  <li>- Nếu hủy chuyến du lịch trong vòng từ 08-16 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>70% trên giá tour du lịch</strong>.</li>
  <li>- Nếu hủy chuyến du lịch trong vòng từ 02-07 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>90% trên giá vé du lịch</strong>.</li>
  <li>- Nếu hủy chuyến du lịch trong vòng 1 ngày trước ngày khởi hành: Chi phí hủy tour: <strong>100% trên giá vé du lịch</strong>.</li>
</ul>
<p><em> Các tour Lễ, Tết là tour có thời gian diễn ra rơi vào một trong các ngày Lễ, Tết theo qui định.</em></p>
<p><em> Thời gian hủy được tính cho ngày làm việc, không tính Thứ 7, Chủ Nhật và các ngày Lễ, Tết.</em></p>
`
const payment = `<ul style="padding-left: 5px;">
  <li>- Khi đăng ký đặt cọc 50% số tiền tour</li>
  <li>- Thanh toán hết trước ngày khởi hành 5 ngày (tour ngày thường), trước ngày khởi hành 10 – 15 ngày (tour lễ tết)</li>
</ul>`
const specialIssue = `<ul style="padding-left: 5px;">
  <li>- Nếu chương trình du lịch bị hủy bỏ hoặc thay đổi bởi một trong hai bên vì lý do bất khả kháng (hỏa hoạn, thời tiết, tai nạn, thiên tai, chiến tranh, dịch bệnh, hoãn, dời, và hủy chuyến hoặc thay đổi khác của các phương tiện vận chuyển công cộng hoặc các sự việc bất khả kháng khác theo quy định pháp luật…), thì hai bên sẽ không chịu bất kỳ nghĩa vụ bồi hoàn các tổn thất đã xảy ra và không chịu bất kỳ trách nhiệm pháp lý nào. Tuy nhiên mỗi bên có trách nhiệm cố gắng tối đa để giúp đỡ bên bị thiệt hại nhằm giảm thiểu các tổn thất gây ra vì lý do bất khả kháng.</li>
</ul>
`
const registerCondition = `<ul style="padding-left: 5px;">
  <li>- Khi đăng ký vui lòng cung cấp giấy tờ tùy thân tất cả người đi: Chứng minh nhân dân/Hộ chiếu (Passport)/Giấy khai sinh (trẻ em dưới 14 tuổi). Trong trường hợp đăng ký trực tuyến qua www.viettriptourist.com vui lòng nhập tên chính xác theo thứ tự: Họ/tên lót/tên xuất vé máy bay. Quý khách khi đăng ký cung cấp tên theo giấy tờ tùy thân nào, khi đi tour mang theo giấy tờ tùy thân đó.</li>
  <li>- <strong>Quy định giấy tờ tùy thân khi đi tour:</strong>
    <ul style="margin-left: 20px; list-style-type: disc;">
      <li> <strong>Khách quốc tịch Việt Nam:</strong> Trẻ em dưới 14 tuổi: Giấy khai sinh bản chính/Hộ chiếu bản chính còn giá trị sử dụng. Trẻ em từ 14 tuổi trở lên và Người lớn: CMND/ Hộ chiếu bản chính còn giá trị sử dụng.</li>
      <li> <strong>Khách quốc tịch nước ngoài hoặc là Việt kiều:</strong> Khi đi tour vui lòng mang theo hộ chiếu bản chính (Passport) kèm thị thực nhập cảnh (visa) hoặc thẻ xanh kèm thị thực nhập cảnh (visa dán vào hộ chiếu hoặc tờ rời hoặc cuốn miễn thị thực). Các loại giấy tờ này phải có dấu nhập cảnh Việt Nam và còn giá trị sử dụng theo quy định khi đi tour.</li>
    </ul>
  </li>

  <li>- <strong>Giờ nhận phòng & trả phòng</strong> theo quy định khách sạn: nhận sau 14:00 giờ và trả trước 12:00 giờ.</li>
  <li>- Phòng khách sạn/resort có thể xảy ra trường hợp không gần nhau, không cùng tầng, loại phòng một giường đôi hoặc hai giường đơn không theo yêu cầu, tùy tình hình thực tế từng khách sạn/resort.</li>
  <li>- Trường hợp quý khách tham gia tour 01 khách, bắt buộc đóng thêm tiền phụ thu phòng đơn để ở riêng 01 phòng. Nếu trong đoàn có khách đi 01 mình, cùng giới tính và có nhu cầu muốn ghép cùng phòng với quý khách thì Viettrip Tourist sẽ hoàn lại tiền phụ thu phòng đơn.</li>
  <li>- Trường hợp quý khách đi nhóm 03 khách, Viettrip Tourist sẽ cung cấp 01 phòng gồm 01 giường lớn 1m6 và 01 giường phụ di động từ 0.8 - 1.2m (extrabed). Nếu có nhu cầu ở riêng, vui lòng đóng thêm phụ thu phòng đơn.</li>
  <li>- Trong trường hợp quý khách yêu cầu nâng chuẩn loại phòng cao cấp hơn, vui lòng liên hệ phụ trách tuyến & thanh toán chi phí phát sinh (nếu có).</li>
  <li>- <strong>Chương trình tham quan biển đảo:</strong> Nếu quý khách không khỏe, có tiền sử bệnh hoặc có chất kích thích trong người (rượu, bia…), thì không nên tắm & lặn biển để đảm bảo an toàn.</li>
  
  <li>- <strong>Về điều kiện sức khỏe:</strong> 
    <ul style="margin-left: 20px; list-style-type: disc;">
      <li> Cam kết đã được tư vấn, hiểu rõ và đồng ý các quy định liên quan về điều kiện sức khỏe khi tham gia chương trình.</li>
      <li> Khách nữ từ 55 tuổi trở lên và khách nam từ 60 tuổi trở lên: nên có người thân dưới 55 tuổi (đủ sức khỏe) đi cùng.</li>
      <li> Khách từ 70 tuổi trở lên: bắt buộc có người thân dưới 55 tuổi (đủ sức khỏe) đi cùng.</li>
      <li> Khách từ 80 tuổi trở lên: không có chế độ bảo hiểm. Viettrip Tourist giữ quyền xem xét phục vụ tùy theo sức khỏe và người thân đi kèm.</li>
      <li> Quý khách mang thai: vui lòng báo ngay khi đăng ký, phải có ý kiến bác sĩ trước khi đi tour. Tự chịu trách nhiệm về sức khỏe mẹ và thai nhi. Mang theo sổ khám thai & giấy tờ tùy thân. Tuần thai từ 28 trở đi phải có giấy khám thai trong vòng 7 ngày gần nhất.</li>
      <li> Cam kết bản thân và người thân đủ sức khỏe để tham gia tour. Đồng ý miễn trừ trách nhiệm đối với Viettrip Tourist và nhân viên.</li>
      <li> Tự chịu chi phí phát sinh ngoài chương trình tour liên quan đến sức khỏe (lưu trú, vận chuyển, khám chữa bệnh...), trừ chi phí thuộc phạm vi bảo hiểm.</li>
    </ul>
  </li>

  <li>- Quý khách có nhu cầu xuất hóa đơn, vui lòng cung cấp thông tin khi đăng ký hoặc trước khi thanh toán. Không nhận xuất hóa đơn sau khi tour kết thúc.</li>
  <li>- Vui lòng đọc kỹ chương trình, giá tour, các khoản bao gồm/không bao gồm, và điều kiện hủy tour. Tùy thời điểm đăng ký, kênh bán, giá tour có thể thay đổi.</li>
  <li>- Nếu không trực tiếp đăng ký mà nhờ người khác, quý khách nên tìm hiểu kỹ chương trình từ người đăng ký giúp mình.</li>
  <li>- Đây là chương trình du lịch trọn gói, Viettrip Tourist không hoàn trả chi phí chênh lệch cho các đối tượng miễn giảm (trẻ nhỏ, người lớn tuổi, người có công...). Chính sách miễn giảm (nếu có) chỉ áp dụng cho khách lẻ tại điểm tham quan.</li>
</ul>
`
const contact = `<p><strong>Mọi chi tiết vui lòng liên hệ:</strong></p>
<ul style="padding-left: 5px;">
  <li>- Công ty TNHH Lữ Hành Quốc Tế Viet Trip</li>
  <li>- 135/8 Nguyễn Thái Học, Nha Trang, Khánh Hoà</li>
  <li>- Điện thoại: 091 494 3366 - 084 246 6868</li>
</ul>
<p style="text-align: center;"><strong>VIETTRIP TOURIST KÍNH CHÚC QUÝ KHÁCH MỘT CHUYẾN DU LỊCH VUI VẺ!</strong></p>
`


export default function NoticeInformation({ priceIncluded,
    priceNotIncluded,
    cancelInfor,
    childrenNotice,
   
     }: {
        priceIncluded: string,
        priceNotIncluded: string,
        cancelInfor: string,
        childrenNotice: string,
      
    }) {

    return <div className="py-5 space-y-2">
        <h2 className="text-center md:text-2xl text-lg font-bold">NHỮNG THÔNG TIN CẦN LƯU Ý</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <NoticeCollapItem title='Giá Tour Bao gồm' content={priceIncluded} />
            <NoticeCollapItem title='Lưu ý về chuyến và hủy tour' content={cancelInfor} />
            <NoticeCollapItem title='Giá Tour Không Bao Gồm' content={priceNotIncluded} />
            <NoticeCollapFixed title='Các điều kiện hủy tour đối với ngày thường' content={cancelCondition} />
            <NoticeCollapItem title='Lưu ý giá trẻ em' content={childrenNotice} />
            <NoticeCollapFixed title='Các điều kiện hủy tour đối với ngày lễ, Tết' content={cancelConditionOnHoliday} />
            <NoticeCollapFixed title='Điều kiện thanh toán' content={payment} />
            <NoticeCollapFixed title='Trường hợp bất khả kháng' content={specialIssue} />
            <NoticeCollapFixed title='Điều kiện đăng ký' content={registerCondition} />
            <NoticeCollapFixed title='Liên hệ' content={contact} />
        </div>
    </div>
}