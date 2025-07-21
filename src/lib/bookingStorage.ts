// lib/bookingStorage.ts


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
