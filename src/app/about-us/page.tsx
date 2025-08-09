import TopBanner from "@/components/site-page/top-banner";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="md:pt-28 pt-20">
      <TopBanner breadcrumbs={[{ title: "Giới thiệu", slug: "/about-us" }]} />
      <div className="md:px-[10%] px-4 py-5 space-y-4">
        <h2 className="font-bold text-2xl text-center">
          CÔNG TY TNHH LỮ HÀNH QUỐC TẾ VIỆT TRIP
        </h2>
        <p className="text-md">
          <span className="font-semibold">
            Công ty TNHH Lữ Hành Quốc Tế Việt Trip
          </span>{" "}
          là đơn vị du lịch uy tín chuyên tư vấn, thiết kế và tổ chức các tour
          du lịch trong nước và quốc tế, mang đến những hành trình trọn vẹn và
          trải nghiệm đáng nhớ cho du khách. Chúng tôi chuyên tổ chức các Tour
          ghép đoàn hàng ngày tại{" "}
          <span className="font-semibold">
            Nha Trang, Mũi Né, Phan Thiết, Đà Lạt, Tuy Hoà, Quy Nhơn...{" "}
          </span>
          Ngoài ra, chúng tôi còn là đơn vị{" "}
          <span className="font-semibold">đơn vị tổ chức</span> chuyên nghiệp,
          đặc biệt với chương trình{" "}
          <span className="font-semibold">
            Team Building/ Gala Dinner/ Camping/ Event...
          </span>
          kết hợp giữa giải trí, giao lưu và khám phá thiên nhiên.
          <span className="block mb-4" />
          Bên cạnh dịch vụ lữ hành,{" "}
          <span className="font-semibold">VietTrip Tourist</span> còn cung cấp{" "}
          <span className="font-semibold">voucher</span> nghỉ dưỡng tại các{" "}
          <span className="font-semibold">
            khách sạn, resort, villa cao cấp,{" "}
          </span>
          mang đến kỳ nghỉ chất lượng với chi phí tối ưu nhất. Chúng tôi cũng
          cung cấp dịch vụ{" "}
          <span className="font-semibold">cho thuê tàu, cano, xe du lịch</span>{" "}
          từ 5 đến 15 chỗ, đảm bảo phương tiện di chuyển an toàn, tiện nghi và
          phù hợp với mọi nhu cầu.
          <span className="block mb-4" />
          Ngoài ra, <span className="font-semibold">VietTrip Tourist</span>{" "}
          chúng tôi hỗ trợ{" "}
          <span className="font-semibold">dịch vụ Visa du lịch</span> nhanh
          chóng, chuyên nghiệp, giúp khách hàng dễ dàng thực hiện những chuyến
          đi quốc tế.
          <span className="block mb-4" />
          Với phương châm{" "}
          <span className="font-semibold">
            &quot;Tận tâm - Chất lượng - Uy tín&quot;, VietTrip Tourist
          </span>{" "}
          chúng tôi luôn cam kết mang đến những dịch vụ du lịch tốt nhất, giá
          thành hợp lý nhất, góp phần tạo nên những hành trình ý nghĩa và đáng
          nhớ của quý du khách.
          <span className="block mb-4" />
          Quý khách hãy liên hệ ngay với công ty chúng tôi để có những chuyến
          hành trình, những tải nghiệm tour du lịch hoàn hảo và thú vị nhất.
          <span className="block mb-4" />
          Thông tin liện hệ và đặt dịch vụ:
          <span className="block mb-4" />
          <span className="font-semibold">
            Công ty TNHH Lữ Hành Quốc Tế Việt Trip
          </span>
          <span className="block mb-4" />
          📍{" "}
          <Link
            href="https://maps.app.goo.gl/FpscPdFpRitr6i359"
            target="_blank"
            rel="noopener noreferrer"
          >
            135/8 Nguyễn Thái Học, Nha Trang, Khánh Hòa
          </Link>
          <span className="block mb-4" />
          ✉️{" "}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=viettriptour79@gmail.com"
            className="font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            viettriptour79@gmail.com
          </Link>
          <span className="block mb-4" />
          🌐{" "}
          <Link
            href="https://www.viettriptourist.com/"
            className="font-semibold"
          >
            www.viettriptourist.com
          </Link>
          <span className="block mb-4" />
          📲 Hotline:{" "}
          <span className="font-semibold">
            <Link href="tel:0914943366">091 494 3366 </Link>
          </span>
          <span className="block mb-4" />
          ☎️ Văn phòng:{" "}
          <span className="font-semibold">
            <Link href="tel:0842466868">084 246 6868</Link>
          </span>{" "}
          <span className="block mb-4" />
          <span className="text-md uppercase text-center tracking-wide">
            Khám phá - Trải nghiệm - Tận hưởng
            <br /> Việt Trip Tourist - Your Journey, Our Passion!
          </span>
          <span className="block mb-4" />
        </p>
      </div>
    </div>
  );
}
