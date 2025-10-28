function getOrdinalNumber(number) {
  if (number === 1) return "1st";
  if (number === 2) return "2nd";
  if (number === 3) return "3rd";
  return number + "th";
}

module.exports = getOrdinalNumber;
