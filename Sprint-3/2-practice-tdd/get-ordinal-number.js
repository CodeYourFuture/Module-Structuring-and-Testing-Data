function getOrdinalNumber(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }
  const suffix = suffixes[(lastTwoDigits % 10)] || "th";
  return num + suffix;
}

module.exports = getOrdinalNumber;
