import Link from "next/link";

export default function NewsInformtion({ title, description, content, createAt }: {
    title: string,
    description: string,
    content: string,
    createAt: string
}) {

    return <div className="space-y-3 md:w-3/4">
        <p className="text-sm font-semibold space-x-1">
            <Link className="hover:text-blue-600 hover:underline" href='/'>Trang chủ</Link>
            <span>/</span>
            <Link href='/tin-tuc' className="hover:text-blue-600 hover:underline">Tin tức</Link>
            <span>/</span>
            <span>{title}</span>
        </p>
        <h1 className="text-2xl font-bold">
            {title}
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg">
            <div className="rounded-lg space-y-2 bg-gray-200 px-3 py-5">
                <p className="text-sm">{createAt}</p>
                <p className="italic font-semibold text-sm">{description}</p>
            </div>
            <div className="space-y-4" dangerouslySetInnerHTML={{ __html: content }} />
        </div>

    </div>
}