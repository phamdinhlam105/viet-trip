'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function TopBanner() {
    const pathname = usePathname();

    // Tách các phần trong URL, ví dụ: /tours/3/island → ['tours', '3', 'island']
    const segments = pathname.split('/').filter(Boolean);

    // Tạo breadcrumb từ các phần
    const breadcrumbs = segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        return { label: decodeURIComponent(segment), href };
    });

    // Tiêu đề lấy từ phần cuối URL, nếu không có thì là 'Trang chủ'
    const title = breadcrumbs.length
        ? breadcrumbs[breadcrumbs.length - 1].label
        : 'Trang chủ';

    return (
        <div
            style={{
                backgroundImage: 'url("/homepage/banner-background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
            className="w-full min-h-50 flex items-center justify-center"
        >
            <div className="text-white space-y-2 px-4 py-6 max-w-screen-xl">
                <h1 className="text-3xl font-bold capitalize">
                    {title.replace(/-/g, ' ')}
                </h1>
                <nav className="text-sm text-white/80">
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
