'use client';

import { Search, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const TYPES = ['Khách sạn', 'Biệt thự', 'Khu nghỉ dưỡng'];
const STARS = [5, 4, 3, 2, 1];


export default function HotelSideBar({ toggleType, toggleStar, selectedTypes, selectedStar, nameFilter }: {
    toggleType: (type: string) => void,
    toggleStar: (star: number) => void,
    selectedTypes: string[],
    selectedStar: number | null,
    nameFilter: (name?: string) => void
}) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        nameFilter(search.trim());
    }, [search]);

    return (<div className="py-4 space-y-4">
        <h2 className='text-xl font-bold bg-gradient-to-r from-[#1161A2] to-[#77C2B8] bg-clip-text text-transparent'>BỘ LỌC TÌM KIẾM:</h2>
        <div className="w-64 space-y-6 border rounded p-4">
            <div className="flex items-center space-x-4 relative">
                <Search className='absolute left-2' />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 border border-gray-300 rounded px-3 py-2 w-full"
                    placeholder="Tìm tên khách sạn..."
                />
            </div>
            <div>
                <h3 className="font-bold mb-2">Loại hình chỗ ở</h3>
                {TYPES.map(type => (
                    <label key={type} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => toggleType(type)}
                        />
                        <span>{type}</span>
                    </label>
                ))}
            </div>

            <div>
                <h3 className="font-bold mb-2">Xếp hạng sao</h3>
                <div className="space-y-2">
                    {STARS.map(star => (
                        <button
                            key={star}
                            onClick={() => toggleStar(star)}
                            className={`flex items-center space-x-2 px-2 py-1 rounded w-full text-left transition ${selectedStar === star
                                ? 'bg-yellow-100 border border-yellow-400'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            <span className="ml-2 text-sm">{star}</span>
                            {[...Array(star)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            ))}

                        </button>
                    ))}
                </div>
            </div>
        </div>
    </div>);
}
