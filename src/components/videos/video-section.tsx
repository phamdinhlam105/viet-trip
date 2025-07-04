import SectionHeader from "../section-header/section-header";

const VIDEO_MAIN = {
    id: 1,
    position: 'main',
    link: 'https://www.youtube.com/embed/g6eJQn3k5p0'
}

const SUBVIDEO_LIST = [
    {
        id: 2,
        position: 'sub',
        link: 'https://www.youtube.com/embed/HDRgl-AtI0Q'
    },
    {
        id: 3,
        position: 'sub',
        link: 'https://www.youtube.com/embed/b_Ulb3nHjvc'
    }
]
export default function VideoSection() {

    return <div className="w-full space-y-5 py-5">
        <SectionHeader title="Videos Tour Nha Trang Hot" />
        <div className="flex space-x-3">
            <iframe className="md:w-2/3 md:h-122 w-full aspect-[3/2]"
                src={VIDEO_MAIN.link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <div className="flex flex-col justify-between space-y-2 md:w-1/3 hidden sm:block">
                {SUBVIDEO_LIST.map(item =>
                    <iframe
                        className="w-full h-60"
                        key={item.id}
                        src={item.link}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                )}
            </div>
        </div>
    </div>
}