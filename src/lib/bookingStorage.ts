// lib/bookingStorage.ts

import { combos, hotels, tours } from "@/components/tour-booking/mock-data";

export const getBookingItems = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("booking_items");
  return data ? JSON.parse(data) : [];
};

export const removeBookingItem = (id: string, type: string) => {

  const current = getBookingItems();
  const updated = current.filter((item: { id: string, type: string }) => !(item.id === id && item.type === type));
  localStorage.setItem("booking_items", JSON.stringify(updated));
  return updated;
};

export const removeAllBookingItems = () => {
  localStorage.removeItem("booking_items");
};


export const addBookingItem = (newItem: { id: string; type: string }) => {
  if (typeof window === "undefined") return;
  const existing = JSON.parse(localStorage.getItem("booking_items") || "[]");
  const updated = [...existing, newItem];
  localStorage.setItem("booking_items", JSON.stringify(updated));
};

export const getTourById = (id: string) => {
  return tours.find(t => t.id === id);
};

// ✅ Hàm lấy hotel theo id
export const getHotelById = (id: string) => {
  return hotels.find(h => h.id === id);
};

// ✅ Hàm lấy combo theo id
export const getComboById = (id: string) => {
  return combos.find(c => c.id === id);
};