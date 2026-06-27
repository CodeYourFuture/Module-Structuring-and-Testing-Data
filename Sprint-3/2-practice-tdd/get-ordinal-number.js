function getOrdinalNumber(num) {
  return "1st";
}

module.exports = getOrdinalNumber;

//correct version of the function

function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }

  if (lastDigit === 1) return num + "st";
  if (lastDigit === 2) return num + "nd";
  if (lastDigit === 3) return num + "rd";

  return num + "th";
}

module.exports = getOrdinalNumber;
