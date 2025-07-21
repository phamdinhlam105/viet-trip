"use client";

import { useEffect, useState } from "react";
import NoticeCollapFixed from "./notice-collaps-fixed";
import { getNoticeInformation } from "@/components/api/tour-api";
import { toast } from "sonner";

export default function NoticeInformation() {
  const [isLoading, setIsLoading] = useState(true);
  const [noticeInfor, setNoticeInfor] = useState({
    id: "",
    priceIncluded: "",
    priceNotIncluded: "",
    cancelInfor: "",
    cancelCondition: "",
    childrenNotice: "",
    cancelConditionOnHoliday: "",
    payment: "",
    specialIssue: "",
    registerCondition: "",
    contact: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNoticeInformation();
      if (result) {
        setNoticeInfor(result);
        setIsLoading(false);
      } else toast.error("Không thể tải dữ liệu");
    };
    fetchData();
  },[]);

  return (
    <div className="py-5 space-y-2">
      <h2 className="text-center md:text-2xl text-lg font-bold">
        NHỮNG THÔNG TIN CẦN LƯU Ý
      </h2>
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          <NoticeCollapFixed
            title="Giá Tour Bao gồm"
            content={noticeInfor.priceIncluded}
          />
          <NoticeCollapFixed
            title="Lưu ý về chuyến và hủy tour"
            content={noticeInfor.cancelInfor}
          />
          <NoticeCollapFixed
            title="Giá Tour Không Bao Gồm"
            content={noticeInfor.priceNotIncluded}
          />
          <NoticeCollapFixed
            title="Các điều kiện hủy tour đối với ngày thường"
            content={noticeInfor.cancelCondition}
          />
          <NoticeCollapFixed
            title="Lưu ý giá trẻ em"
            content={noticeInfor.childrenNotice}
          />
          <NoticeCollapFixed
            title="Các điều kiện hủy tour đối với ngày lễ, Tết"
            content={noticeInfor.cancelConditionOnHoliday}
          />
          <NoticeCollapFixed
            title="Điều kiện thanh toán"
            content={noticeInfor.payment}
          />
          <NoticeCollapFixed
            title="Trường hợp bất khả kháng"
            content={noticeInfor.specialIssue}
          />
          <NoticeCollapFixed
            title="Điều kiện đăng ký"
            content={noticeInfor.registerCondition}
          />
          <NoticeCollapFixed title="Liên hệ" content={noticeInfor.contact} />
        </div>
      )}
    </div>
  );
}
