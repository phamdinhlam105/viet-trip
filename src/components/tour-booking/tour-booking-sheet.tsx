"use client"

import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react"
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { getBookingItems, removeBookingItem } from "@/lib/bookingStorage";
import { BookingItemCard } from "./booking-item-card/booking-index";

export default function TourBookingSheet({ openState }: { openState: boolean }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<[{ id: number, type: string }]>();
  useEffect(() => {
    if (openState) {
      setData(getBookingItems);
    }
  }, [openState]);

  const onRemove = (id: number) => {
    removeBookingItem(id);
    setData(getBookingItems);
  }

  return (
    <SheetContent side="right" className="max-h-screen overflow-y-auto p-4">
      <SheetHeader>
        <SheetTitle className="text-xl text-center uppercase">Form đặt tour</SheetTitle>
      </SheetHeader>
      <form className="space-y-2 mt-4 relative py-4 px-2 border border-gray-300 rounded-lg">
        <Label className="font-semibold text-xl absolute -top-4 bg-background px-2">Thông tin</Label>
        <div className=" flex justify-between py-2">
          <Label className="font-semibold">Họ và tên</Label>
          <input className="w-2/3" required placeholder="Nhập họ tên của bạn" />
        </div>

        <div className="flex justify-between py-2">
          <Label className="font-semibold">Số điện thoại</Label>
          <input className="w-2/3" required type="tel" placeholder="0123 456 789" />
        </div>

        <div>
          <Label className="font-semibold">Email</Label>
          <input className="w-full" type="email" placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="font-semibold">
            Ngày khởi hành
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-48 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date)
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label className="font-semibold">Số người</Label>
          <input type="number" required placeholder="1" min={1} />
        </div>

        <div>
          <Label className="font-semibold">Ghi chú</Label>
          <textarea className="w-full" rows={4} placeholder="Ghi chú thêm (nếu có)" />
        </div>

        <div className="space-y-2">
          <Label className="font-semibold">Những chương trình đã chọn</Label>
          {data?.map((item, idx) => <BookingItemCard key={idx} item={item} onRemove={onRemove} />)}
        </div>

        <Button type="submit" className="w-full">
          Gửi yêu cầu
        </Button>
      </form>
    </SheetContent>
  )
}
