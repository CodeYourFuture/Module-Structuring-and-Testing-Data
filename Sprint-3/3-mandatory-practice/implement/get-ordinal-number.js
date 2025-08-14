function getOrdinalNumber(num) {
  const v = num % 100;
  if (v > 10 && v < 14) return num + "th";
  return num + (["th", "st", "nd", "rd"][num % 10] || "th");
}

module.exports = getOrdinalNumber;
