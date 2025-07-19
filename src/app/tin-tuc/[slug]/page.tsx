import { getPostBySlug } from "@/components/api/post-api";
import { PostDetail } from "@/components/models/app-models";
import NewsInformtion from "@/components/news-page/news-information";
import NewsSideBar from "@/components/news-page/news-sidebar";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default async function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [currentPost, setCurrentPost] = useState<PostDetail>({
    id: "",
    slug: "",
    title: "",
    thumbnail: "",
    description: "",
    updatedAt: "",
    author: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (slug: string) => {
      const result = await getPostBySlug(slug);
      if (result) {
        setCurrentPost(result);
        setIsLoading(false);
      } else return notFound();
    };
  });

  return (
    <div className="md:flex md:px-[10%] px-2 pb-5 space-x-2 space-y-10 md:pt-40 pt-25">
      {isLoading ? "Đang tải dữ liệu" : <NewsInformtion {...currentPost} />}
      <NewsSideBar />
    </div>
  );
}
