export function formatPrice(price: string|undefined): string {
  if (price === undefined || price === null) return '';

  const raw = price.toString().replace(/\./g, '');
  const num = Number(raw);

  return !isNaN(num)
    ? `${num.toLocaleString('vi-VN')} đ`
    : price;
}