export type Hotel = {
  id: string;
  name: string;
  slug: string;
  address: string;
  star: number;
  description: string;
  price: string;
  promotionPrice?: string;
  thumbnail: string;
};

export type HotelDetail = {
  id: string;
  name: string;
  slug: string;
  address: string;
  star: number;
  description: string;
  content: string;
  ultilities: string;
  price: string;
  promotionPrice?: string;
  thumbnail: string;
  images: string[];
  rule: string;
  roomDetails: {
    id: string;
    hotelId: string;
    name: string;
    capacity: string;
    price: string;
    included: string;
  }[];
};

export type Tour = {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  price: string;
  startingPlace: string;
};

export type TourDetail = {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  price: string;
  startingPlace: string;
  schedule: string;
  scheduleDetail: string;
  images: string[];
  tourDetail: {
    id: string;
    location: string;
    food: string;
    suitablePerson: string;
    idealTime: string;
    transportation: string;
    promotion: string;
  };
};

export type Post = {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  slug: string;
  thumbnail: string;
};

export type PostDetail = {
  id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  thumbnail: string;
  updatedAt: string;
  author: string;
};

export type Combo = {
  id: string;
  name: string;
  slug: string;
  price: string;
  tourId?: string;
  tourName?: string;
  hotelId?: string;
  hotelName?: string;
  applyDate: string;
  endDate: string;
  transportation: string;
  description: string;
};

export type ComboDetail = {
  id: string;
  name: string;
  slug: string;
  price: string;
  applyDate: string;
  endDate: string;
  transportation: string;
  description: string;
  hotel: {
    id: string;
    name: string;
    description: string;
    ultilities: string;
    address: string;
    star: number;
    images: string[];
  };
  tour: {
    id: string;
    name: string;
    description: string;
    schedule: string;
    scheduleDetail: string;
    startingPlace: string;
    images: string[];
  };
};
