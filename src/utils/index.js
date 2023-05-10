const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const checkLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const daysInMonth = (month) => {
  return daysInEachMonth[month - 1] || 31;
};

export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const calcAge = (birthday) => {
  const currentDate = new Date();
  const diff = currentDate - birthday;
  const yearInMs = 365.25 * 24 * 60 * 60 * 1000;
  const monthInMs = 30.44 * 24 * 60 * 60 * 1000;
  const dayInMs = 24 * 60 * 60 * 1000;

  const years = Math.floor(diff / yearInMs);
  const months = Math.floor((diff % yearInMs) / monthInMs);
  const days = Math.floor(((diff % yearInMs) % monthInMs) / dayInMs);

  console.log(`${years} years, ${months} months, ${days} days`);
  return {
    years,
    months,
    days,
  };
};
