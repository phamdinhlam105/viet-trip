"use client"

import HotelList from "@/components/hotel-page/hotel-list"
import HotelSideBar from "@/components/hotel-page/sidebar-filter"
import { HOTEL_MOCK_DATA } from "@/components/mock-data/hotel"
import TopBannerNoPicture from "@/components/site-page/top-banner-no-picture"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Menu } from "lucide-react"
import { useCallback, useState } from "react"


export default function HotelPage() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedStar, setSelectedStar] = useState<number | null>(null);
    const [searchName, setSearchName] = useState<string | undefined>();
    const [sortBy, setSortBy] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false)

    const toggleType = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    const toggleStar = (star: number) => {
        setSelectedStar(prev => (prev === star ? null : star));
    };

    const filteredData = HOTEL_MOCK_DATA.filter(hotel => {
        const matchType = selectedTypes.length === 0 || selectedTypes.includes(hotel.type);
        const matchStar = selectedStar === null || hotel.star === selectedStar;
        const matchName = !searchName || hotel.name.toLowerCase().includes(searchName.toLowerCase());
        return matchType && matchStar && matchName;
    });

    const nameFilter = useCallback((name?: string) => {
        setSearchName(name ?? '');
    }, []);

    return <div className="md:pt-28 pt-20">
        <TopBannerNoPicture breadcrumbs={[{title:'Khách sạn',slug:'hotel'}]} />
        <div className="md:px-[10%] py-5 md:flex md:space-x-6 relative">
            <div className="block md:hidden w-full mb-4 sticky top-20 bg-white shadow-lg z-10 flex flex-col items-center">
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full flex justify-center items-center border-none">
                            <span>Bộ lọc khách sạn</span>
                            <Menu className="w-5 h-5" />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <HotelSideBar
                            toggleType={toggleType}
                            toggleStar={toggleStar}
                            selectedTypes={selectedTypes}
                            selectedStar={selectedStar}
                            nameFilter={nameFilter}
                        />
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="hidden md:block">
                <HotelSideBar
                    toggleType={toggleType}
                    toggleStar={toggleStar}
                    selectedTypes={selectedTypes}
                    selectedStar={selectedStar}
                    nameFilter={nameFilter}
                />
            </div>
            <HotelList listdata={filteredData} sortBy={sortBy} onSortChange={setSortBy} />
        </div>
    </div>
}