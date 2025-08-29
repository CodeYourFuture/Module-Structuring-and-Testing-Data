function getOrdinalNumber(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = num % 100;
  if (value >= 11 && value <= 13) {
    return num + "th";
  }
  const lastDigit = num % 10;
  const suffix = suffixes[lastDigit] || "th";
  return num + suffix;
}

module.exports = getOrdinalNumber;
