function getOrdinalNumber(num) {
  if (num === 1) return "1st";
  if (num === 2) return "2nd";
  if (num === 3) return "3rd";
  if (num === 4) return "4th";
}

module.exports = getOrdinalNumber;
