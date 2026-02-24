function getOrdinalNumber(num) {
  // 11 is a special case
  if (num === 11) {
    return "11th";
  }
  const lastDigit = num % 10;
  switch (lastDigit) {
    case 1:
      return String(num) + "st";
    case 2:
      return String(num) + "nd";
    case 3:
      return String(num) + "rd";
    default:
      return String(num) + "th";
  }
}

module.exports = getOrdinalNumber;
