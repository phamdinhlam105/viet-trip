
import { PostDetail } from "@/components/models/app-models";
import NewsInformtion from "@/components/news-page/news-information";
import NewsSideBar from "@/components/news-page/news-sidebar";

export default function NewsDetailBody({
  currentPost
}: {
  currentPost: PostDetail;
}) {
  return (
    <div className="md:flex md:px-[10%] px-2 pb-5 space-x-2 space-y-10 md:pt-40 pt-25">
      <NewsInformtion {...currentPost} />
      <NewsSideBar currentId={currentPost.id} />
    </div>
  );
}
