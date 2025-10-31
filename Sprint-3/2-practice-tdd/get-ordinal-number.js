function getOrdinalNumber(num) {
  const twoLastDig = num % 100;
  if (twoLastDig === 11 || twoLastDig === 12 || twoLastDig === 13) {
    return num + "th";
  }

  const lastDig = num % 10;
  if (lastDig === 1) return num + "st";
  if (lastDig === 2) return num + "nd";
  if (lastDig === 3) return num + "rd";
  return num + "th";
}




module.exports = getOrdinalNumber;
