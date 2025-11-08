function getOrdinalNumber(num) {
  if (num === 1) return "1st";
  if (num === 2) return "2nd";
  if (num === 3) return "3rd";
  if (num === 11) return "11th";
  if (num === 21) return "21st";
  if (num === 22) return "22nd";
  if (num === 23) return "23rd";
  return num + "th";
}

module.exports = getOrdinalNumber;
