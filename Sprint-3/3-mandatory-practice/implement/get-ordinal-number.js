// get-ordinal-number.js
function getOrdinalNumber(number) {
  const n = Math.abs(number);
  const suffixes = ["th", "st", "nd", "rd"];
  const relevantSuffix = n % 100;

  if (relevantSuffix > 3 && relevantSuffix < 21) {
    return number + "th";
  }

  const suffix = suffixes[Math.min(n % 10, 3)];
  return number + suffix;
}

module.exports = getOrdinalNumber;