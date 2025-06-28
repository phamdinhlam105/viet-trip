
export default function SectionHeader({ title, describe }: { title: string, describe?: string }) {

    return <div>
        <div className="flex justify-between items-stretch">
            <div>
                <h2 className="md:text-2xl text-xl font-bold bg-gradient-to-r from-[#1161A2] to-[#77C2B8] bg-clip-text text-transparent">
                    {title}
                </h2>
                <div className=" my-3 w-[250px] bg-gradient-to-r from-[#1161A2] to-[#77C2B8] h-[4px]">
                </div>
            </div>
            <div className="hidden sm:block">
                <h2 className="text-md">
                    Xem tất cả
                </h2>
                <div className=" my-3 w-full bg-gradient-to-r from-[#1161A2] to-[#77C2B8] h-[4px]">
                </div>
            </div>

        </div>
        {describe ? <p className="md:w-2/3 text-wrap md:text-md text-sm">
            {describe}
        </p> : undefined}
    </div>
}