function getOrdinalNumber(num) {
  const last = num % 10;
  const lastTwo = num % 100;

  if (last === 1 && lastTwo !== 11) return num + "st";
  if (last === 2 && lastTwo !== 12) return num + "nd";
  if (last === 3 && lastTwo !== 13) return num + "rd";
  return num + "th";
}

module.exports = getOrdinalNumber;

