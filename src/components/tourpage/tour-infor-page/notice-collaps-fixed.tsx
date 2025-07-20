"use client"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react";

export default function NoticeCollapFixed({ title, content }: { title: string, content: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full flex-col">
        <CollapsibleTrigger asChild>
            <Button variant="outline" size="icon" className="w-full bg-gray-200 text-start justify-between p-4 py-6">
                <p className="text-wrap md:text-md text-sm py-2">{title}</p>
                 <ChevronDown
                    className={` transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
                />
            </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-2 bg-gray-200 mt-2 space-y-2 prose" dangerouslySetInnerHTML={{__html:content}} />
        </CollapsibleContent>
    </Collapsible>
}