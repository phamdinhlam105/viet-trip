import { HOTEL_MOCK_DATA } from "../mock-data/hotel";
import { TOUR_MOCK_DATA } from "../mock-data/tour";

export const tours = TOUR_MOCK_DATA.map(item => ({
  id: item.id,
  name: item.name,
  schedule: item.schedule,
  price: item.price,
  availableTime: "Hàng ngày",
  thumbnail: item.thumbnail,
}));

export const hotels = HOTEL_MOCK_DATA.map(item => ({
  id: item.id,
  name: item.name,
  address: item.address,
  openTime: "24/7",
  price: item.price,
  thumbnail: item.thumbnail
}))

export const combos = [
  {
    id: "1",
    name: "Combo Mùa Hè",
    idTour: "1",
    idHotel: "1",
    applyDate: "20/07/2025",
    price: "1500000"
  },
  {
    id: "2",
    name: "Combo Cuối Tuần",
    idTour: "2",
    idHotel: "2",
    applyDate: "10/07/2025",
    price: "1200000"
  },
  {
    id: "3",
    name: "Combo Mùa Hè",
    idTour: "1",
    idHotel: "1",
    applyDate: "20/07/2025",
    price: "1500000"
  },
  {
    id: "4",
    name: "Combo Cuối Tuần",
    idTour: "2",
    idHotel: "2",
    applyDate: "10/07/2025",
    price: "1200000"
  },
  {
    id: "5",
    name: "Combo Mùa Hè",
    idTour: "1",
    idHotel: "1",
    applyDate: "20/07/2025",
    price: "1500000"
  },
  {
    id: "6",
    name: "Combo Cuối Tuần",
    idTour: "2",
    idHotel: "2",
    applyDate: "10/07/2025",
    price: "1200000"
  },
  {
    id: "7",
    name: "Combo Mùa Hè",
    idTour: "1",
    idHotel: "1",
    applyDate: "20/07/2025",
    price: "1500000"
  },
  {
    id: "8",
    name: "Combo Cuối Tuần",
    idTour: "2",
    idHotel: "2",
    applyDate: "10/07/2025",
    price: "1200000"
  },
  {
    id: "9",
    name: "Combo Mùa Hè",
    idTour: "1",
    idHotel: "1",
    applyDate: "20/07/2025",
    price: "1500000"
  },
  {
    id: "10",
    name: "Combo Cuối Tuần",
    idTour: "2",
    idHotel: "2",
    applyDate: "10/07/2025",
    price: "1200000"
  }
];
