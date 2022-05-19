const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});
export default function formatMoney(value) {
  if (!value) return '$0.00';
  return formatter.format(value / 100);
}
