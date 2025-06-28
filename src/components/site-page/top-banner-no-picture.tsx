'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function TopBannerNoPicture() {

    const pathname = usePathname();

    const segments = pathname.split('/').filter(Boolean);

    const breadcrumbs = segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        return { label: decodeURIComponent(segment), href };
    });

    const title = breadcrumbs.length
        ? breadcrumbs[breadcrumbs.length - 1].label
        : 'Trang chủ';

    return (
        <div className="w-full mt-10 flex items-center justify-center">
            <div className="space-y-2 px-4 py-2">
                <h1 className="text-3xl font-bold capitalize">
                    {title.replace(/-/g, ' ')}
                </h1>
                <nav className="text-sm ">
                    <ol className="flex flex-wrap items-center space-x-2">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={crumb.href} className="flex items-center space-x-2">
                                <span>/</span>
                                <Link href={crumb.href} className="hover:underline capitalize">
                                    {crumb.label.replace(/-/g, ' ')}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>

            </div>
        </div>
    );
}