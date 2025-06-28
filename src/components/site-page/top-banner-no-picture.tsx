
import Link from 'next/link';

export default function TopBannerNoPicture({ breadcrumbs }: { breadcrumbs: { slug: string; title: string }[] }) {

    const title = breadcrumbs.length
        ? breadcrumbs[breadcrumbs.length - 1].title
        : 'Trang chủ';

    return (
        <div className="w-full py-5 flex items-center justify-center">
            <div className="space-y-2 px-4 py-2 ">
                <h1 className="text-3xl font-bold uppercase bg-gradient-to-r from-[#1161A2] to-[#77C2B8] bg-clip-text text-transparent">
                    {title}
                </h1>

                <nav className="text-sm flex justify-center w-full">
                    <ol className="flex space-x-2 ">
                        <li>
                            <Link href="/" className="hover:underline">
                                Trang chủ
                            </Link>
                        </li>

                        {breadcrumbs.map((crumb, index) => {
                            const path = '/' + breadcrumbs.slice(0, index + 1).map(c => c.slug).join('/');
                            return (
                                <li key={index} className="flex items-center space-x-2">
                                    <span>/</span>
                                    <Link href={path} className="hover:underline capitalize">
                                        {crumb.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </div>
    );
}
