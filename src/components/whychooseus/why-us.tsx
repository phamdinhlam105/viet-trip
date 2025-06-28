
import StaticItem from "./static-item"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const WHY_CHOOSE_US = [
    {
        id: 1,
        title: 'Kinh nghiệm trên 12 năm',
        content: 'Chúng tôi là Công ty tổ chức và điều hành Tour du lịch trực tiếp Uy Tín và Chuyên Nghiệp tại Nha Trang.'
    },
    {
        id: 2,
        title: 'Chuyên Tour Bình Ba',
        content: 'Công ty lữ hành đầu tiên tổ chức Tour Bình Ba. Công ty trực tiếp tổ chức Tour Bình Ba Nha Trang chất lượng, uy tín nhất hiện nay.'
    },
    {
        id: 3,
        title: 'Chất Lượng, Uy tín, Tận tình',
        content: 'Đội ngũ nhân viên chuyên nghiệp, được đào tạo bài bản, tận tình, luôn sẵn sàng phục vụ Quý khách. Hệ thống tàu du lịch, cano đời mới, xe chất lượng cao, nhà bè trên đảo.'
    },
]
export default function WhyChooseUs() {

    return <div className="w-full px-[10%] space-y-2 py-8"
        style={{
            backgroundImage: 'url("/homepage/why-choose-us.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
        }}>
        <h2 className="md:text-2xl text-xl font-bold text-white">
            Tại sao nên chọn Viet Trip Tourist
        </h2>
        <div className="md:w-1/4 bg-white h-[4px]">
        </div>
        <p className="md:w-2/3 text-wrap md:text-md text-sm text-white">
            Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn những khoảnh khắc tuyệt vời và nâng tầm cuộc sống. Chúng tôi cam kết mang đến những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo cách hoàn hảo nhất.
        </p>
        <div className="hidden md:grid grid grid-cols-3 gap-6 text-white mt-4">
            {WHY_CHOOSE_US.map(item =>
                <div key={item.id} className="py-5">
                    <StaticItem title={item.title} content={item.content} />
                </div>
            )}
        </div>
        <Carousel className="w-full block md:hidden">
            <CarouselContent className="snap-x">
                {WHY_CHOOSE_US.map(item => <CarouselItem className="space-y-4 py-5 snap-start" key={item.id}>
                     <div key={item.id} className="py-5 text-white">
                    <StaticItem title={item.title} content={item.content} />
                </div>
                </CarouselItem >)}
            </CarouselContent>
        </Carousel>
    </div>
}