// app/not-found.tsx

'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-xl mb-2">Trang bạn tìm không tồn tại.</p>
      <p className="text-sm text-muted-foreground mb-6">Có thể đường dẫn đã bị thay đổi hoặc bị xóa.</p>
      <Button asChild>
        <Link href="/">Quay về trang chủ</Link>
      </Button>
    </div>
  );
}
