const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const checkLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const daysInMonth = (month) => daysInEachMonth[month - 1];
