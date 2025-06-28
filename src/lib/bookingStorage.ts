// lib/bookingStorage.ts

import { combos, hotels, tours } from "@/components/tour-booking/mock-data";
import { IdCard } from "lucide-react";

export const getBookingItems = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("booking_items");
  return data ? JSON.parse(data) : [];
};

export const removeBookingItem = (id: number) => {

  const current = getBookingItems();
  const updated = current.filter((item: { id: number; }) => !(item.id === id));
  localStorage.setItem("booking_items", JSON.stringify(updated));
  return updated;
};

export const addBookingItem = (newItem: { id: number; type: string }) => {
  if (typeof window === "undefined") return;
  const existing = JSON.parse(localStorage.getItem("booking_items") || "[]");
  const updated = [...existing, newItem];
  localStorage.setItem("booking_items", JSON.stringify(updated));
};

export const getTourById = (id: number) => {
  return tours.find(t => t.id === id);
};

// ✅ Hàm lấy hotel theo id
export const getHotelById = (id: number) => {
  return hotels.find(h => h.id === id);
};

// ✅ Hàm lấy combo theo id
export const getComboById = (id: number) => {
  return combos.find(c => c.id === id);
};