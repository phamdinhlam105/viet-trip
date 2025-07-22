import Image from "next/image";
import Link from "next/link";
export default function NewsItem({
  slug,
  thumbnail,
  title,
  description,
  updatedAt,
}: {
  slug: string;
  thumbnail: string;
  title: string;
  description: string;
  updatedAt: string;
}) {
  return (
    <div className="w-full flex flex-col justify-between bg-white rounded-lg border border-gray-200 space-y-4 pb-4 shadow-lg">
      <Link href={`/tin-tuc/${slug}`}>
        <div className="relative w-full aspect-3/2">
          <Image
            className=" rounded-lg"
            src={thumbnail}
            alt="Ảnh đại diện tour"
            fill
            unoptimized
          />
        </div>

        <div className="space-y-2 px-4 py-4">
          <p className="text-gray-600 text-sm">{new Date(updatedAt).toLocaleDateString("vi-VN")}</p>
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-sm line-clamp-4">{description}</p>
        </div>
      </Link>
    </div>
  );
}
