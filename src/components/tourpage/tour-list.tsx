"use client"
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import TourItem from "../tour/tour-item";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOUR_LIST = [
    {
        id: 1,
        title: 'Tour 3 Đảo Cano',
        describe: 'Tour 3 Đảo Cano là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '450.000',
        thumbnail: '/homepage/tour.jpg'
    },
    {
        id: 2,
        title: 'Tour Lặn Biển San Hô',
        describe: 'Tour 3 Đảo Cano là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '450.000',
        thumbnail: '/tour/vinh-san-ho-2.jpg'
    },
    {
        id: 3,
        title: 'Tour 3 Đảo Cano',
        describe: 'Tour 3 Đảo Cano là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '450.000',
        thumbnail: '/homepage/tour.jpg'
    },
    {
        id: 4,
       title: 'Tour Lặn Biển San Hô',
        describe: 'Tour 3 Đảo Cano là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '450.000',
        thumbnail: '/tour/vinh-san-ho-2.jpg'
    },
    {
        id: 5,
        title: 'Tour 3 Đảo Cano',
        describe: 'Tour 3 Đảo Cano là tour chất lượng, nổi tiếng ở Nha Trang. Khách sẽ hài lòng với chất lượng phục vụ của Viet Trip Tourist.',
        departure: 'TP. Nha Trang',
        schedule: 'Hàng ngày',
        price: '450.000',
        thumbnail: '/homepage/tour.jpg'
    },
]


export default function TourList() {

    const [sortBy, setSortBy] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // số tour trên mỗi trang

    const sortedTourList = [...TOUR_LIST].sort((a, b) => {
        if (sortBy === "price-asc") return parseInt(a.price.replace(".", "")) - parseInt(b.price.replace(".", ""));
        if (sortBy === "price-desc") return parseInt(b.price.replace(".", "")) - parseInt(a.price.replace(".", ""));
        return 0;
    });

    const totalPages = Math.ceil(sortedTourList.length / itemsPerPage);
    const paginatedTours = sortedTourList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return <div className="md:px-[10%] px-2 py-10">
        <div className="flex items-center space-x-6 justify-end mb-4">
            <DropdownMenu>
                <label>Sắp xếp theo: </label>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="min-w-30">
                        {sortBy === "price-asc"
                            ? "Giá tăng dần"
                            : sortBy === "price-desc"
                                ? "Giá giảm dần"
                                : "Mặc định"}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSortBy("")}>
                        Mặc định
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price-asc")}>
                        Giá tăng dần
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price-desc")}>
                        Giá giảm dần
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="md:grid md:grid-cols-3 gap-4">
            {sortedTourList.map(item => <TourItem key={item.id} {...item} />)}
        </div>
        <div className="flex justify-center items-center mt-6 space-x-2">
            <Button
                variant="outline"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeft/>
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
                <ChevronRight/>
            </Button>
        </div>
    </div>
}