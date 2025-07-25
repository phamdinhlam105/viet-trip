"use client";

import TopBanner from "@/components/site-page/top-banner";
import { Suspense } from "react";
import SearchBody from "./search-body";

export default function SearchPage() {

  return (
    <div className="md:pt-28 pt-20">
      <TopBanner breadcrumbs={[{ title: "Tìm kiếm", slug: "/tim-kiem" }]} />
        <Suspense fallback={<div>Đang tải...</div>}>
        <SearchBody />
      </Suspense>
    </div>
  );
}
