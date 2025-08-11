"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function NotFoundBody() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 2) {
      window.history.go(-2);
    } else {
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col space-y-4 items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-xl mb-2">Trang bạn tìm không tồn tại.</p>
      <p className="text-sm text-muted-foreground mb-6">
        Có thể đường dẫn đã bị thay đổi hoặc bị xóa.
      </p>
      <Button onClick={() => router.push("/")}>Quay về trang chủ</Button>
      <Button onClick={handleBack}>Quay lại</Button>
    </div>
  );
}
