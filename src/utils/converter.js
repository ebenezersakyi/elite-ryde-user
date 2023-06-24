export function getDaysDifference(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000;

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffDays = Math.round(Math.abs((start - end) / oneDay));

  return diffDays;
}
