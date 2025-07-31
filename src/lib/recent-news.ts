export const addRecentNews = (newId: string) => {
  if (typeof window === "undefined") return;
  const existing: string[] = JSON.parse(
    localStorage.getItem("recent_news") || "[]"
  );
  const filtered = existing.filter((id) => id !== newId);
  const updated = [newId, ...filtered];
  const recentThree = updated.slice(0, 3);
  localStorage.setItem("recent_news", JSON.stringify(recentThree));
};
export const getRecentNews = (): string[] => {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem("recent_news");
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch (e) {
    console.error("Failed to parse recent_news from localStorage:", e);
    return [];
  }
};
