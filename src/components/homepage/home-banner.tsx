import ActionNavigationResponsive from "./responsive/action-navigation-responsive";

export default function HomePageBanner() {

    return <div
        style={{
            backgroundImage: 'url("/homepage/banner-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
        }}
        className="w-full flex items-center justify-around min-h-120"
    >
        <div className="text-white space-y-2 px-10 hidden sm:block">
            <h1 className="md:text-4xl text-lg font-bold text-center">KHÁM PHÁ QUỐC ĐẢO TÔM HÙM</h1>
            <h3 className="md:text-lg text-xs text-center capitalize font-bold">Tour Bình Ba Khởi hành hàng ngày, giá tốt cho anh em phượt thủ</h3>
        </div>
        <ActionNavigationResponsive />
    </div >
}