function getOrdinalNumber(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = num % 100;
  if (v >= 11 && v <= 13) {
    return num + "th";
  } else {
    const suffix = suffixes[(num % 10)] || "th";
    return num + suffix;
  }
}

module.exports = getOrdinalNumber;
