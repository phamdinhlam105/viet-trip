"use client"
import { Button } from "@/components/ui/button"
import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Collapsible } from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function TourSchedule({ schedule, scheduleDetail }: {
    schedule: string[],
    scheduleDetail: string
}) {
    const [isOpen, setIsOpen] = useState(false);

    return <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full flex-col gap-2 py-4">
        <h2 className="text-center text-2xl font-bold my-4">
            LỊCH TRÌNH
        </h2>
        <CollapsibleTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-none bg-gray-200 w-full text-start justify-between p-4 py-6">
                <p>{schedule.join(" - ")}</p>
                <ChevronDown
                    className={` transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
                />
            </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-2 ">
            <div className=" bg-gray-200 p-4 space-y-4" dangerouslySetInnerHTML={{ __html: scheduleDetail }} />
        </CollapsibleContent>
    </Collapsible>
}