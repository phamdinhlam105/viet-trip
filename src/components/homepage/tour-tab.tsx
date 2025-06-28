"use client"

import { useState } from "react"

export default function TourTab() {
    const [search, setSearch] = useState('');

    return <div className="md:flex md:space-x-10 px-4">
        <div className="md:w-1/2">
            <h3 className="font-bold text-md">Bạn muốn đi đâu?</h3>
            <input
                className="text-sm w-full p-2"
                placeholder="Tìm kiếm bất kỳ điểm đến nào bạn yêu thích!"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div>
            <h3 className="font-bold text-md">Ngày đi</h3>
            <p className="text-sm">
                T6, 6 tháng 6, 2025
            </p>
        </div>
        <div>
            <h3 className="font-bold text-md">Ngân sách</h3>
            <p className="text-sm">
                Chọn mức giá
            </p>
        </div>
    </div>
}