function getOrdinalNumber(num) {
  if (typeof num !== "number") {
    return undefined; // Return undefined if the input is not a number
  }
  const lastTwoDigits = num % 100; // Get the last two digits of the number
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th"; // Special case for 11th, 12th, and 13th
  }
  const lastDigit = num % 10; // Get the last digit of the number
  if (lastDigit === 1) {
    return num + "st";
  } else if (lastDigit === 2) {
    return num + "nd";
  } else if (lastDigit === 3) {
    return num + "rd";
  }
  return num + "th"; // Default case for all other numbers
}

console.log(getOrdinalNumber(111)); // "111th"
module.exports = getOrdinalNumber;
