import ComboItem from "@/components/combo/combo-item"
import { COMBO_LIST } from "@/components/combo/combo-section"
import TopBannerNoPicture from "@/components/site-page/top-banner-no-picture"
import { Button } from "@/components/ui/button"

export default function ComboPage() {

    return <div>
        <TopBannerNoPicture breadcrumbs={[{ title: 'Combo giá tốt', slug: 'combo' }]} />
        <div className="md:px-[10%] px-2 py-5">
            <div className="py-4 flex md:flex-row flex-col gap-4 justify-center">
                <Button
                    variant="outline"
                    className="
                        md:w-1/6
                        rounded-full
                        text-md
                        bg-white
                        bg-gradient-to-r from-[#269F8C] to-[#0E5AA4]
                        bg-clip-text text-transparent
                        border border-[#269F8C]
                        transition-all duration-500 ease-in-out
                        hover:text-white
                        hover:bg-gradient-to-r hover:from-[#269F8C] hover:to-[#0E5AA4]
                        hover:bg-clip-border hover:text-white" >
                    Tất cả
                </Button>

                <Button
                    variant="outline"
                    className="
                        md:w-1/6
                        rounded-full
                        text-md
                        bg-white
                        bg-gradient-to-r from-[#269F8C] to-[#0E5AA4]
                        bg-clip-text text-transparent
                        border border-[#269F8C]
                        transition-all duration-500 ease-in-out
                        hover:text-white
                        hover:bg-gradient-to-r hover:from-[#269F8C] hover:to-[#0E5AA4]
                        hover:bg-clip-border hover:text-white" >
                    Máy bay
                </Button>

                <Button
                    variant="outline"
                    className="
                        md:w-1/6
                        rounded-full
                        text-md
                        bg-white
                        bg-gradient-to-r from-[#269F8C] to-[#0E5AA4]
                        bg-clip-text text-transparent
                        border border-[#269F8C]
                        transition-all duration-500 ease-in-out
                        hover:text-white
                        hover:bg-gradient-to-r hover:from-[#269F8C] hover:to-[#0E5AA4]
                        hover:bg-clip-border hover:text-white" >
                    Xe + Khách sạn
                </Button>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                {COMBO_LIST.map(item => <ComboItem key={item.id} {...item} />)}
            </div>
        </div>
    </div>
}