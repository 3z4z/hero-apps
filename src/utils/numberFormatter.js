export const numberFormat = (num) =>
  new Intl.NumberFormat("en", { notation: "compact" }).format(num);
