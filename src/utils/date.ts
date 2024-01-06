const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function format(date: string, shorten?: boolean) {
  const formatedDate = new Date(date);
  const month = shorten ? MONTHS[formatedDate.getMonth()].slice(0, 3) : MONTHS[formatedDate.getMonth()];
  return `${month} ${formatedDate.getDay()}, ${formatedDate.getFullYear()}`;
}
