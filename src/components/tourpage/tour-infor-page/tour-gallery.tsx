"use client";
import { useState } from "react";
import Image from "next/image";
import DetailPageGallery from "@/components/site-page/gallery-dialog/detail-page-gallery";
import { Button } from "@/components/ui/button";

interface Props {
  images: string[];
}

export default function TourDetailGallery({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const maxThumbnails = 3;

  return (
    <div className="flex gap-4 items-stretch">
      {/* Sidebar thumbnails */}
      <div className="grid grid-rows-4 gap-2 w-1/4">
        {images.slice(0, maxThumbnails).map((img, index) => {
          return (
            <Button
              variant="ghost"
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-full h-full p-2 border-2 rounded-md overflow-hidden ${selectedIndex === index ? "border-blue-500" : "border-transparent"
                }`}
            >
              {/* Ảnh thumbnail */}
              <Image
                src={img}
                alt={`Hình ${index + 1}`}
                fill
              />
            </Button>
          );
        })}
        <div className="relative rounded-md overflow-hidden">
          {images.length > 3 && (
            <DetailPageGallery images={images} />
          )}
        </div>

      </div>

      {/* Main image */}
      <div className="w-3/4">
        <Image
          src={images[selectedIndex]}
          alt={`Hình lớn ${selectedIndex + 1}`}
          width={800}
          height={600}
          className="w-full h-full rounded-md shadow-md"
        />
      </div>
    </div>
  );
}
