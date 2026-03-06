function getOrdinalNumber(num) {
  // Calculate the remainder when divided by 100 to check for 11, 12, 13
  const lastTwoDigits = number % 100;

  // Calculate the remainder when divided by 10 to get the single last digit
  const lastDigit = number % 10;

  // 1. The "teen" exceptions (11th, 12th, 13th)
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return number + "th";
  }

  // 2. Apply standard rules based on last digit
  if (lastDigit === 1) {
    return number + "st";
  } else if (lastDigit === 2) {
    return number + "nd";
  } else if (lastDigit === 3) {
    return number + "rd";
  } else {
    // Cover 0, 4, 5, 6, 7, 8, and 9
    return number + "th";
  }
}

module.exports = getOrdinalNumber;
