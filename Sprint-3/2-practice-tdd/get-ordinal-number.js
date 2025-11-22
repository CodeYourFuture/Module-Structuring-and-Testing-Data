function getOrdinalNumber(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const date = num % 100;

  if (date >= 11 && date <= 13) {
    return num + "th";
  }
  const suffix = suffixes[(date % 10)] || "th";
  return num + suffix;
}

module.exports = getOrdinalNumber;
