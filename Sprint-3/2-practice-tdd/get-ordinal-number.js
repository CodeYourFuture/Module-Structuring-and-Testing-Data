function getOrdinalNumber(num) {
  const last2Digits = String(num).slice(-2);
  if (["11", "12", "13"].includes(last2Digits)) return `${num}th`;

  const lastDigit = String(num).slice(-1);
  const restOfNum = String(num).slice(0, -1);
  let ordinalResult = "";
  switch (lastDigit) {
    case "1":
      ordinalResult = `${num}st`;
      break;
    case "2":
      ordinalResult = `${num}nd`;
      break;
    case "3":
      ordinalResult = `${num}rd`;
      break;
    default:
      ordinalResult = `${num}th`;
  }
  return ordinalResult;
}

module.exports = getOrdinalNumber;
