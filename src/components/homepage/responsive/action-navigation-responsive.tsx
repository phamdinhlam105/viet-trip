'use client'

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import TourTab from "../tour-tab"
import { Separator } from "@/components/ui/separator"
import { Component, Hotel, Plus, Sailboat, Wallet } from "lucide-react"

export default function ActionNavigationResponsive() {
  const [openTab, setOpenTab] = useState<string | null>(null)

  const tabData = [
    { key: "visa", label: "Visa", content: <TourTab /> },
    { key: "tour", label: "Tour trọn gói", content: <TourTab /> },
    { key: "hotel", label: "Khách sạn", content: <TourTab /> },
    { key: "combo", label: "Combo", content: <TourTab /> },
    { key: "others", label: "Dịch vụ khác", content: <TourTab /> },
  ]

  return (
    <div className="rounded-lg p-2 md:hidden bg-white w-3/4">
      <div className="w-full space-y-2 relative">
        <div className="w-full flex justify-between bg-blue-100 rounded-lg items-center py-4">
          <Button
            key={tabData[0].key}
            variant="ghost"
            className="flex flex-col justify-center w-1/2 text-sm text-sky-800 font-bold bg-blue-100"
            onClick={() => setOpenTab(tabData[0].key)}  >
              <Wallet/>
            {tabData[0].label}
          </Button>
          <div className="absolute left-[50%] -rotate-x-[50%] h-10 w-[1px] bg-white"></div>
          <Button
            key={tabData[1].key}
            variant="ghost"
            className="flex flex-col justify-center w-1/2 text-sm text-sky-800 font-bold bg-blue-100"
            onClick={() => setOpenTab(tabData[1].key)} >
              <Sailboat/>
            {tabData[1].label}
          </Button>
        </div>
       <div className="relative w-full flex justify-between bg-blue-100 rounded-xl items-center py-4">
          <Button
            key={tabData[2].key}
            variant="ghost"
            className="flex flex-col justify-center w-1/2 text-sm text-sky-800 font-bold bg-blue-100"
            onClick={() => setOpenTab(tabData[2].key)}>
              <Hotel/>
            {tabData[2].label}
          </Button>
            <div className="absolute left-[50%] -rotate-x-[50%] h-10 w-[1px] bg-white"></div>
          <Button
            key={tabData[3].key}
            variant="ghost"
            className="flex flex-col justify-center w-1/2 text-sm text-sky-800 font-bold bg-blue-100"
            onClick={() => setOpenTab(tabData[3].key)}>
              <div className="flex space-x-1"><Sailboat/> <Plus/> <Hotel/></div>
            {tabData[3].label}
          </Button>
        </div>
      <div className="w-full flex justify-between bg-blue-100 rounded-xl items-center py-4">
          <Button
            key={tabData[4].key}
            variant="ghost"
            className="flex flex-col justify-center text-sm text-sky-800 font-bold bg-blue-100 w-full text-center"
            onClick={() => setOpenTab(tabData[4].key)}
          >
            <Component/>
            {tabData[4].label}
          </Button>
        </div>

      </div>

      {tabData.map((tab) => (
        <Sheet
          key={tab.key}
          open={openTab === tab.key}
          onOpenChange={(open) => !open && setOpenTab(null)}
        >
          <SheetContent side="bottom" className="rounded-t-lg h-[80vh] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>{tab.label}</SheetTitle>
              <Separator />
            </SheetHeader>
            <div className="mt-4">{tab.content}</div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
