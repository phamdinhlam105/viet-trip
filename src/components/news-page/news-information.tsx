import Link from "next/link";

export default function NewsInformtion({ news }: { news: unknown }) {
    const newsData = news as any;
    return <div className="space-y-3 md:w-3/4">
        <p className="text-sm font-semibold">
            <Link href='/tin-tuc' className="hover:text-blue-600 hover:underline">Tin tức</Link> / <span>{newsData.title}</span>
        </p>
        <h1 className="text-2xl font-bold">
            {newsData.title}
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg">
            <div className="rounded-lg space-y-2 bg-gray-200 px-3 py-5">
                <p className="italic font-semibold text-sm">{newsData.description}</p>
            </div>
            <div className="space-y-4" dangerouslySetInnerHTML={{ __html: newsData.content }} />
        </div>

    </div>
}