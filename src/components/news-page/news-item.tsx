import { truncateText } from '@/lib/truncate-text';
import Image from 'next/image';
import Link from 'next/link';
export default function NewsItem({ news }: { news: any }) {


    return <div className="w-full flex flex-col justify-between bg-white rounded-lg border border-gray-200 space-y-4 pb-4 shadow-lg">
        <Link href={news.href}>
            <div className='relative w-full aspect-3/2'>
                <Image
                    className=' rounded-lg'
                    src={news.thumbnail}
                    alt="Ảnh đại diện tour"
                    fill />
            </div>

            <div className='space-y-2 px-4 py-4'>
                <h3 className='text-md font-bold'>
                    {news.title}
                </h3>
                <p className='text-sm'>
                    {truncateText(news.description, 200)}
                </p>

            </div>
        </Link>
    </div >
}