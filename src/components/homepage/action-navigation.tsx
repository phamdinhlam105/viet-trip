import { Component, Hotel, Plus, Sailboat, Wallet } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TourTab from "./tour-tab";



export default function ActionNavigation() {

    return <div className="w-full min-h-20 min-h-30 h-fit relative flex justify-around hidden sm:block">
        <Tabs defaultValue="tour"
            className="w-full py-5 px-2 bg-white rounded-lg shadow-lg absolute -top-20 
             border border-gray
             flex-col px-10 ">
            <TabsList
                className="self-center py-5 items-center bg-white
                 text-lg gap-2">
                <TabsTrigger value="visa" className="hover:text-blue-700 cursor-pointer w-1/5 p-4 data-[state=active]:bg-gray-200"><Wallet/>Visa</TabsTrigger>
                <TabsTrigger value="tour" className="hover:text-blue-700 cursor-pointer w-1/5 p-4 data-[state=active]:bg-gray-200"><Sailboat/>Tour trọn gói</TabsTrigger>
                <TabsTrigger value="hotel" className="hover:text-blue-700 cursor-pointer w-1/5 p-4 data-[state=active]:bg-gray-200"><Hotel/>Khách sạn</TabsTrigger>
                <TabsTrigger value="combo" className="hover:text-blue-700 cursor-pointer w-1/5 p-4 data-[state=active]:bg-gray-200"><Sailboat/> <Plus/> <Hotel/> Combo</TabsTrigger>
                <TabsTrigger value="others" className="hover:text-blue-700 cursor-pointer w-1/5 p-4 data-[state=active]:bg-gray-200"><Component/>Dịch vụ khác</TabsTrigger>
            </TabsList>
            <TabsContent value="visa" className="min-h-10">It's John Cenaaaaaaaaaaaaa</TabsContent>
            <TabsContent value="tour" className="min-h-10"><TourTab /></TabsContent>
            <TabsContent value="hotel" className="min-h-10 "><TourTab /></TabsContent>
            <TabsContent value="combo" className="min-h-10"><TourTab /></TabsContent>
            <TabsContent value="others" className="min-h-10"><TourTab /></TabsContent>
        </Tabs>
    </div>
}