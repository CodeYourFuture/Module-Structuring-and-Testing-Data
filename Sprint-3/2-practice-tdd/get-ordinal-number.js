function getOrdinalNumber(num) {
  if (num % 100 >= 11 && num % 100 <= 13) {
    return `${num}th`;
  }
  const lastDigit = num % 10;
  let suffix = "th";

  switch (lastDigit) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
  }

  return `${num}${suffix}`;
}

module.exports = getOrdinalNumber;
