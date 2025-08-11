import { getPostBySlug } from "@/components/api/post-api";
import NewsDetailBody from "./news-body";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = await getPostBySlug(slug);

  if (!news) {
    return {
      title: "Bài viết không tồn tại",
      description: "Bài viết này không tìm thấy trên hệ thống",
    };
  }
  const brandSuffix = " | Viettrip Tourist";
  return {
    title: news.name + brandSuffix,
    description: news.description,
    openGraph: {
      title: news.name,
      description: news.description,
      url: `https://viettripnewsist.com/news/${news.slug}`,
      images: news.images,
    },
    twitter: {
      card: "summary_large_image",
      title: news.name,
      description: news.description,
      images: news.images,
    },
  };
}
export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params; 
  const news = await getPostBySlug(slug);

  if (!news) {
    notFound();
  }

  return <NewsDetailBody currentPost={news} />;
}
