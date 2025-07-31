import TopBanner from "@/components/site-page/top-banner";

export default function LienHe() {
  return (
    <div className="md:pt-28 pt-20">
      <TopBanner breadcrumbs={[{ title: "Liên hệ", slug: "/lien-he" }]} />
      <div className="md:flex justify-center space-x-6 md:px-[10%] px-4 py-10 items-stretch">
        <div className="text-center space-y-4 p-5 md:w-1/3">
          <h2 className="font-bold">Thông tin liên hệ</h2>
          <p>
            Điện thoại: 084 246 6868
            <br />
            Hotline: 091 494 3366
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=viettriptour79@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-400"
          >
            viettriptour79@gmail.com
          </a>
        </div>
        <div className="text-center space-y-4 p-5 md:w-1/3">
          <h2 className="font-bold">Ghé thăm văn phòng chúng tôi</h2>
          <p>135/8 Nguyễn Thái Học, Nha Trang, Khánh Hòa</p>
          <a
            href="https://maps.app.goo.gl/FpscPdFpRitr6i359"
            className="hover:underline hover:text-blue-400"
          >
            Bản đồ chỉ dẫn
          </a>
        </div>
        <div className="text-center space-y-4 p-5 md:w-1/3">
          <h2 className="font-bold">Liên hệ làm đối tác ?</h2>
          <p>
            Nếu bạn quan tâm đến việc trở thành đối tác, liên hệ với chúng tôi
            qua mail.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=viettriptour79@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-400"
          >
            viettriptour79@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <iframe
        className="w-full aspect-3/1"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d564.2103052946153!2d109.18986597468421!3d12.257277928560391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067c9ee2e30b1%3A0xfaf9e8096c207070!2sVIET%20TRIP%20TOURIST!5e0!3m2!1svi!2s!4v1753931335166!5m2!1svi!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
