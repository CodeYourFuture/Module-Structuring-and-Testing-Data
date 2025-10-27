function getOrdinalNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid input";
  }
  const sign = num < 0 ? "-" : "";
  num = Math.abs(num);

  // Handle decimals
  if (!Number.isInteger(num)) {
    return sign + num + "th";
  }

  const lastTwo = num % 100;
  const lastOne = num % 10;

  // Handle special cases 11th, 12th, 13th
  if (lastTwo >= 11 && lastTwo <= 13) {
    return sign + num + "th";
  }

  // Normal ordinal rules
  switch (lastOne) {
    case 1:
      return sign + num + "st";
    case 2:
      return sign + num + "nd";
    case 3:
      return sign + num + "rd";
    default:
      return sign + num + "th";
  }
}

module.exports = getOrdinalNumber;