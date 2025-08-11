import { getHotelBySlug } from "@/components/api/hotel-api";
import HotelDetailBody from "./hotel-body";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hotel = await getHotelBySlug(slug);

  if (!hotel) {
    return {
      title: "hotel không tồn tại",
      description: "hotel này không tìm thấy trên hệ thống",
    };
  }
  const brandSuffix = " | Viettrip Tourist";
  return {
    title: hotel.name + brandSuffix,
    description: hotel.description,
    openGraph: {
      title: hotel.name,
      description: hotel.description,
      url: `https://viettriphotelist.com/hotel/${hotel.slug}`,
      images: hotel.images,
    },
    twitter: {
      card: "summary_large_image",
      title: hotel.name,
      description: hotel.description,
      images: hotel.images,
    },
  };
}
export default async function HotelDetailPage({ params }: PageProps) {
  const { slug } = await params; 
  const hotel = await getHotelBySlug(slug);

  if (!hotel) {
    notFound();
  }

  return <HotelDetailBody currentHotel={hotel} />;
}
