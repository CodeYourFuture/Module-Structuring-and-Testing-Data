//function getOrdinalNumber(num) {
//return "1st";
//}

//module.exports = getOrdinalNumber;
function getOrdinalNumber(num) {
  // Handle the teen exception rule first (11th, 12th, 13th)
  // Any number ending in 11, 12, or 13 gets a "th" suffix
  const lastTwoDigits = num % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }

  // Otherwise, look closely at the very last digit
  const lastDigit = num % 10;
  switch (lastDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

module.exports = getOrdinalNumber;
