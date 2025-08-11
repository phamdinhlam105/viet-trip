"use client"
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

export default function IsLoading() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`flex w-full space-x-3 justify-center items-center h-64 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="font-semibold text-xl">Đang tải dữ liệu</p>
      <Loader className="animate-spin" />
    </div>
  );
}
