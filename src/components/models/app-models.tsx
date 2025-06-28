
export type Hotel = {
    id: string;
    name: string;
    address: string;
    star: number;
    price: string;
    discountPrice?: string;
    link:string;
    type: 'Khách sạn' | 'Biệt thự' | 'Khu nghỉ dưỡng';
    thumbnail: string;
};

export type Tour = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: string;
    images: string[];
    additionalDetail:
    {
        mainFeature: string;
        location: string;
        food: string;
        suitablePerson: string;
        idealTime: string;
        transportation: string;
        promotion: string;
    },
    schedule: string[],
    scheduleDetail: string,
};

export type HotelDetail = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: string;
    images: string[];
    additionalDetail:
    {
        mainFeature: string;
        address: string;
        food: string;
        suitablePerson: string;
        openTime: string;
        transportation: string;
        promotion: string;
    },
}