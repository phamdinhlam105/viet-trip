"use client";

import { getAllHotel } from "@/components/api/hotel-api";
import HotelList from "@/components/hotel-page/hotel-list";
import HotelSideBar from "@/components/hotel-page/sidebar-filter";
import IsLoading from "@/components/isloading/is-loading";
import { Hotel } from "@/components/models/app-models";
import TopBannerNoPicture from "@/components/side-page/top-banner-no-picture";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export default function HotelPage() {
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [searchName, setSearchName] = useState<string | undefined>();
  const [sortBy, setSortBy] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllHotel();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast.error("Không thể tải khách sạn vui lòng thử lại");
    };
    fetchData();
  }, []);

  const toggleStar = (star: number) => {
    setSelectedStar((prev) => (prev === star ? null : star));
  };

  const filteredData = data.filter((hotel) => {
    const matchStar = selectedStar === null || hotel.star === selectedStar;
    const matchName =
      !searchName ||
      hotel.name.toLowerCase().includes(searchName.toLowerCase());
    return matchStar && matchName;
  });

  const nameFilter = useCallback((name?: string) => {
    setSearchName(name ?? "");
  }, []);

  return (
    <div className="md:pt-28 pt-20">
      <TopBannerNoPicture
        breadcrumbs={[{ title: "Khách sạn", slug: "hotel" }]}
      />
      <div className="md:px-[10%] py-5 md:flex md:space-x-6 relative">
        <div className="block md:hidden w-full mb-4 sticky top-20 bg-white shadow-lg z-10 flex flex-col items-center">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex justify-center items-center border-none"
              >
                <span>Bộ lọc khách sạn</span>
                <Menu className="w-5 h-5" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <HotelSideBar
                toggleStar={toggleStar}
                selectedStar={selectedStar}
                nameFilter={nameFilter}
              />
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="hidden md:block">
          <HotelSideBar
            toggleStar={toggleStar}
            selectedStar={selectedStar}
            nameFilter={nameFilter}
          />
        </div>
        {isLoading ? (
          <IsLoading />
        ) : (
          <HotelList
            listdata={filteredData}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        )}{" "}
      </div>
    </div>
  );
}
