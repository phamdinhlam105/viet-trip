"use client";
import { useState } from "react";
import Image from "next/image";
import DetailPageGallery from "@/components/side-page/gallery-dialog/detail-page-gallery";
import { Button } from "@/components/ui/button";

interface Props {
  gallery: string[];
}

export default function TourDetailGallery({ gallery }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  const maxThumbnails = 3;

  return (
    <div className="flex gap-4 items-stretch">
      {/* Sidebar thumbnails */}
      <div className="grid grid-rows-4 gap-2 w-1/4">
        {gallery.slice(0, maxThumbnails).map((img, index) => {
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
                unoptimized
              />
            </Button>
          );
        })}
        <div className="relative rounded-md overflow-hidden">
          {gallery.length > 3 && (
            <DetailPageGallery gallery={gallery} />
          )}
        </div>

      </div>

      {/* Main image */}
      <div className="w-3/4 aspect-[3/2]">
        <Image
          src={gallery[selectedIndex]}
          alt={`Hình lớn ${selectedIndex + 1}`}
          width={800}
          height={600}
          className="w-full h-full rounded-md shadow-md"
          unoptimized
        />
      </div>
    </div>
  );
}
