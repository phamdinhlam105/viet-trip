
export default function HotelRule({ rule }: { rule: string }) {

    return <div className="p-5 px-2">
        <h3 className="uppercase text-xl font-bold text-center">Quy định khách sạn</h3>
        <div className="space-y-3" dangerouslySetInnerHTML={{ __html: rule }} />
    </div>
}