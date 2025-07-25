"use client";

import { searchByQuery } from "@/components/api/search-api";
import SearchItemList from "@/components/search/search-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function SearchBody() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";

  const displayQuery = query.replace(/-/g, " ");
  const [data, setData] = useState<
    {
      title: string;
      slug: string;
      description: string;
      thumbnail?: string;
      type: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchData = async (query: string) => {
    const result = await searchByQuery(query);
    if (result) {
      setData(result);
      setIsLoading(false);
    } else toast.error("Không thể tải dữ liệu");
  };

  useEffect(() => {
    fetchData(displayQuery);
    setSearch(displayQuery);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedList = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = async () => {
    await fetchData(search);
  };

  return (
    <div className="px-[10%] py-10 space-y-2">
      <div className="md:w-1/3 relative">
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button
          variant="ghost"
          className="absolute top-0 right-0 z-10"
          onClick={handleSearch}
        >
          <Search />
        </Button>
      </div>
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <div>
          {data.length == 0 ? (
            "Không tìm thấy thông tin"
          ) : (
            <div className="space-y-4">
              {paginatedList.map((item, idx) => (
                <SearchItemList key={idx} {...item} />
              ))}
            </div>
          )}
        </div>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <Button
            variant="outline"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </Button>

          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "default" : "outline"}
              onClick={() => goToPage(index + 1)}
              className="w-10"
            >
              {index + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
