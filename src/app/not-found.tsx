import NotFoundBody from "@/components/not-found/not-found-body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Trang không tồn tại | Viettrip Tourist",
  description:
    "Trang bạn tìm không tồn tại. Có thể đường dẫn đã bị thay đổi hoặc bị xóa.",
};
export default function NotFound() {
  return <NotFoundBody />;
}
