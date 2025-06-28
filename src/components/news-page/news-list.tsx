"use client"
import { useMemo, useState } from "react";
import NewsItem from "./news-item";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "../ui/button";


const ITEMS_PER_PAGE = 9;

export default function NewsList({ newsList }: {
    newsList: {
        id: number,
        title: string,
        createAt: string,
        description: string,
        href: string,
        thumbnail: string
    }[]
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredNews = useMemo(() => {
        return newsList
            .filter(news =>
                news.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                const dateA = new Date(a.createAt || '');
                const dateB = new Date(b.createAt || '');
                return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
            });
    }, [searchTerm, sortOrder, newsList]);


    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
    const paginatedNews = filteredNews.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return <div className="px-[10%] py-4 space-y-6">
        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
            <Search className="absolute left-2" />
            <input
                type="text"
                placeholder="Tìm kiếm theo tiêu đề..."
                className="border p-2 rounded w-full md:w-1/2 pl-10"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                }}
            />

            <select
                className="border p-2 rounded"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            >
                <option value="desc">Mới nhất</option>
                <option value="asc">Cũ nhất</option>
            </select>
        </div>

        {/* List */}
        <div className="grid md:grid-cols-3 gap-6">
            {paginatedNews.map((news) => (<NewsItem key={news.id} {...news} />
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
            <Button
                variant="ghost"
                className="px-2 py-1 border rounded disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeft />
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                    variant="ghost"
                    key={i}
                    className={`px-4 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => handlePageChange(i + 1)}
                >
                    {i + 1}
                </Button>
            ))}
            <Button
                variant="ghost"
                className="px-2 py-1 border rounded disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ChevronRight />
            </Button>
        </div>
    </div>
}