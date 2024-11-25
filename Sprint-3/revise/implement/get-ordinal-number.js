function getOrdinalNumber(num) {
  if ([11, 12, 13].includes(num % 100)) return num + "th";
  if (num % 10 === 1) return num + "st";
  if (num % 10 === 2) return num + "nd";
  if (num % 10 === 3) return num + "rd";
  return num + "th";
}

module.exports = getOrdinalNumber;
