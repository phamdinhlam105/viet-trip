"use client";
import Image from "next/image";
import Link from "next/link";

export default function SearchItemList({
  title,
  description,
  thumbnail,
  slug,
  type,
}: {
  title: string;
  description: string;
  thumbnail?: string;
  slug: string;
  type: string;
}) {
  return (
    <div className="flex space-x-2 rounded-md shadow-md border-gray-200">
      <div className="md:w-1/4 w-1/3 md:aspect-[2/1] aspect-[1/1] relative">
        {thumbnail ? (
          <Image src={thumbnail} alt={title} fill unoptimized />
        ) : (
          <div className="p-4 text-sm md:text-lg uppercase">
            <p className="text-center font-bold">Không có hình ảnh</p>
          </div>
        )}
      </div>

      <Link
        className="md:w-3/4 w-2/3 p-2"
        href={`/${type}/${slug}`}
      >
        <h3 className="md:text-xl text-md font-bold truncate">{title}</h3>
        <p className="line-clamp-2">{description}</p>
      </Link>
    </div>
  );
}
