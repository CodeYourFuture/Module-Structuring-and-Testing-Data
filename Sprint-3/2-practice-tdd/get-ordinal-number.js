/**
function getOrdinalNumber(num) {
  return "1st";
}

module.exports = getOrdinalNumber;
*
*/

function getOrdinalNumber(num) {
  // Handle negative numbers by preserving the sign
  const absoluteNum = Math.abs(num);
  const sign = num < 0 ? "-" : "";

  // Special cases for 11, 12, 13
  const lastTwoDigits = absoluteNum % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${sign}${absoluteNum}th`;
  }

  // Check the last digit for other cases
  const lastDigit = absoluteNum % 10;
  switch (lastDigit) {
    case 1:
      return `${sign}${absoluteNum}st`;
    case 2:
      return `${sign}${absoluteNum}nd`;
    case 3:
      return `${sign}${absoluteNum}rd`;
    default:
      return `${sign}${absoluteNum}th`;
  }
}

module.exports = getOrdinalNumber;

