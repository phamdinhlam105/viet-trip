import { NEWS_MOCK_DATA } from "@/components/mock-data/news";
import NewsInformtion from "@/components/news-page/news-information";
import NewsSideBar from "@/components/news-page/news-sidebar";
import { notFound } from "next/navigation";



export const generateStaticParams = () => {
    return NEWS_MOCK_DATA.map(item => ({
           slug: item.slug,
       }));
}
type Params = Promise<{ slug: string }>;
export default async function NewsDetailPage({ params }: { params: Params }) {
    const { slug } = await params;

    // 🔒 Dữ liệu thực tế sẽ được thay vào đây
     const news = NEWS_MOCK_DATA.find(item => item.slug === slug) ?? null;

    if (!news) {
        return notFound();
    }
    return <div className="md:flex md:px-[10%] px-2 pb-5 space-x-2 space-y-10 md:pt-40 pt-25">
        <NewsInformtion {...news} />
        <NewsSideBar />
    </div>
}