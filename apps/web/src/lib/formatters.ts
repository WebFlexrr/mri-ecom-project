
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "Inr",
    minimumFractionDigits: 2
  }).format(amount);
};
