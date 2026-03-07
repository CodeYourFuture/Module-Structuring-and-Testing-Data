function getOrdinalNumber(num) {
  return "1st";
}

module.exports = getOrdinalNumber;
// Below is the implementation of the getOrdinalNumber function that converts a number to its ordinal form (e.g., 1 to "1st", 2 to "2nd", etc.). 
// The function takes a single parameter `num`, which is the number to convert. 
// It checks the last digit of the number to determine the appropriate suffix ("st", "nd", "rd", or "th") and returns the number concatenated with its ordinal suffix as a string.

function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }

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
