function getOrdinalNumber(num) {
  const lastTwo = num % 100;
  if (lastTwo >= 11 && lastTwo <= 13) {
    return num + "th";
  }
  const last = num % 10;
  if (last === 1) return num + "st";
  if (last === 2) return num + "nd";
  if (last === 3) return num + "rd";
  return num + "th";
}

module.exports = getOrdinalNumber;