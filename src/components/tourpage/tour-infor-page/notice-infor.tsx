import NoticeCollapItem from "./notice-collap-item";

export default function NoticeInformation() {

    return <div className="py-5 space-y-2">
        <h2 className="text-center md:text-2xl text-lg font-bold">NHỮNG THÔN TIN CẦN LƯU Ý</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <NoticeCollapItem title='Giá Tour Bao gồm' content='asdasd'/>
            <NoticeCollapItem title='Lưu ý về chuyến và hủy tour' content='asdasd'/>
            <NoticeCollapItem title='Giá Tour Không Bao Gồm' content='asdsad'/>
            <NoticeCollapItem title='Các điều kiện hủy tour đối với ngày thường' content='asdasdasd'/>
            <NoticeCollapItem title='Lưu ý giá trẻ em' content='sadasdasd'/>
            <NoticeCollapItem title='Các điều kiện hủy tour đối với ngày lễ, Tết' content='asdsadasd'/>
            <NoticeCollapItem title='Điều kiện thanh toán' content='asdasdasd'/>
            <NoticeCollapItem title='Trường hợp bất khả kháng' content='asdasd'/>
            <NoticeCollapItem title='Điều kiện đăng ký' content='asdasdasdsad'/>
            <NoticeCollapItem title='Liên hệ' content='asdasdasd'/>
        </div>
    </div>
}