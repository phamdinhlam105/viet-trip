
import Link from 'next/link';

export default function TopBanner({
    breadcrumbs,
}: {
    breadcrumbs: { slug: string; title: string }[];
}) {
    // Tiêu đề từ phần cuối breadcrumb
    const title = breadcrumbs.length
        ? breadcrumbs[breadcrumbs.length - 1].title
        : 'Trang chủ';

    return (
        <div
            className="w-full min-h-[300px] flex items-center justify-center bg-cover bg-bottom bg-no-repeat"
            style={{
                backgroundImage: 'url("/homepage/banner-background.jpg")',
            }}
        >
            <div className="text-white text-center px-4 py-6 max-w-screen-xl space-y-3">
                {/* Tiêu đề */}
                <h1 className="text-3xl font-bold uppercase">
                    {title}
                </h1>

                {/* Breadcrumb */}
                <nav className="text-sm text-white/80 flex justify-center">
                    <ol className="flex flex-wrap justify-center items-center space-x-2">
                        <li>
                            <Link href="/" className="hover:underline">
                                Trang chủ
                            </Link>
                        </li>

                        {breadcrumbs.map((crumb, index) => {
                            // Tạo href bằng cách nối slug từ đầu tới vị trí hiện tại
                            const href =
                                '/' +
                                breadcrumbs
                                    .slice(0, index + 1)
                                    .map((c) => c.slug)
                                    .join('/');

                            return (
                                <li key={index} className="flex items-center space-x-2">
                                    <span>/</span>
                                    <Link
                                        href={href}
                                        className="hover:underline capitalize"
                                    >
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
