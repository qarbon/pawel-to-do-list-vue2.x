export const getLeadingZero = (num) => {
  const number = Number(num);
  if (Number.isNaN(number)) return num;
  return number < 10 ? `0${number.toFixed(0)}` : `${number.toFixed(0)}`;
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
