'use client';

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

export default function DetailPageGallery({ images }: { images: string[] }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [open, setOpen] = useState(false);
    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger asChild>
                <Button
                    style={{ background: `url(${images[4]}`, backgroundSize: 'cover', boxShadow: 'inset 0 0 0 2000px rgba(13, 13, 12, 0.4)' }}
                    variant="ghost"
                    className="hover:bg-transparent w-full h-full inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold">
                    +{images.length - 3}
                </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="min-w-[95%] border-none bg-transparent">
                <DialogHeader className="p-2">
                    <DialogTitle className="flex items-center justify-end">
                        <Button className="md:bg-background bg-transparent text-white md:text-neutral-900" variant="outline" onClick={() => setOpen(false)}>
                            <XIcon size={40} />
                        </Button>
                    </DialogTitle>
                </DialogHeader>
                <div className="w-full p-2 md:px-[15%] ">
                    {/* Ảnh lớn phía trên */}
                    <div className="relative w-full md:aspect-2/1 aspect-1/1">
                        <Image
                            src={images[selectedImage]}
                            alt="Ảnh lớn"
                            fill
                        />
                    </div>
                </div>
                {/* Carousel ảnh nhỏ phía dưới */}
                <div className="flex gap-2 overflow-x-auto">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative w-1/3 md:aspect-2/1 aspect-1/1">
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx}`}
                                fill
                                onClick={() => setSelectedImage(idx)}
                                className={`cursor-pointer rounded-md border-2 ${selectedImage === idx ? 'border-blue-500' : 'border-transparent'
                                    }`}
                            /></div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
