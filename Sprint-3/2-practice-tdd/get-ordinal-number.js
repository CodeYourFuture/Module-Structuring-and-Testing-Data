

function getOrdinalNumber(num) {
  const s = num.toString();
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  // Rule for 11th, 12th, 13th (The "Teens" exception)
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return s + "th";
  }

  // Standard rules based on the last digit
  switch (lastDigit) {
    case 1:
      return s + "st";
    case 2:
      return s + "nd";
    case 3:
      return s + "rd";
    default:
      return s + "th";
  }
}


module.exports = getOrdinalNumber;


