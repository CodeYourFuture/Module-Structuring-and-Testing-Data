// In this week's prep, we started implementing getOrdinalNumber

function getOrdinalNumber(num) {
  if (typeof num !== "number" || num <= 0 || num % 1 !== 0) {
    return "Invalid input"; // Ensure the input is a positive integer
  }

  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th"; // Handle special case for 11, 12, and 13
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
