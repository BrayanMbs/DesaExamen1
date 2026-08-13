const currencyFormatter = new Intl.NumberFormat("en-GT", {
  style: "currency",
  currency: "GTQ",
  minimumFractionDigits: 2
});

export function formatCurrency(value: number): string {
  return currencyFormatter.format(value).replace("GTQ", "Q");
}
