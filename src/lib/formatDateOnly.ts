export function formatDateOnly(date: Date) {
  return date.toISOString().split("T")[0];
}
