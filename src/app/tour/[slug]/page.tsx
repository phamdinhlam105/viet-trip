import { getTourBySlug } from "@/components/api/tour-api";
import TourDetailBody from "./tour-body";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour không tồn tại",
      description: "Tour này không tìm thấy trên hệ thống",
    };
  }
  const brandSuffix = " | Viettrip Tourist";
  return {
    title: tour.name + brandSuffix,
    description: tour.description,
    openGraph: {
      title: tour.name,
      description: tour.description,
      url: `https://viettriptourist.com/tour/${tour.slug}`,
      images: tour.images,
    },
    twitter: {
      card: "summary_large_image",
      title: tour.name,
      description: tour.description,
      images: tour.images,
    },
  };
}
export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params; 
  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return <TourDetailBody currentTour={tour} />;
}
