function getOrdinalNumber(num) {
  if ([11, 12, 13].includes(num)) return `${num}th`;
  const lastDigit = String(num).slice(-1);
  const restOfNum = String(num).slice(0, -1);
  let ordinalResult = "";
  switch (lastDigit) {
    case "1":
      ordinalResult = restOfNum + "1st";
      break;
    case "2":
      ordinalResult = restOfNum + "2nd";
      break;
    case "3":
      ordinalResult = restOfNum + "3rd";
      break;
    default:
      ordinalResult = restOfNum + lastDigit + "th";
  }
  return ordinalResult;
}

module.exports = getOrdinalNumber;
