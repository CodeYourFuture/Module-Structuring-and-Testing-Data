function getOrdinalNumber(num) {
  const itsTwoLastDigs = num % 100;
  if (itsTwoLastDigs === 11 || itsTwoLastDigs === 12 || itsTwoLastDigs === 13) {
    return num + "th";
  }

  const lastDig = num % 10;
  if (lastDig === 1) return num + "st";
  if (lastDig === 2) return num + "nd";
  if (lastDig === 3) return num + "rd";
  return num + "th";
}




module.exports = getOrdinalNumber;
