function getOrdinalNumber(number) {
  // Handle invalid inputs
  if (typeof number !== "number" || !Number.isFinite(number)) {
    return "Invalid input";
  }

  // Handle zero or negative numbers (optional)
  if (number <= 0) {
    return number + "th";
  }

  // Handle special 11–13 endings
  if (number % 100 >= 11 && number % 100 <= 13) {
    return number + "th";
  }

  // Get last digit to determine suffix
  const lastDigit = number % 10;

  if (lastDigit === 1) return number + "st";
  if (lastDigit === 2) return number + "nd";
  if (lastDigit === 3) return number + "rd";
  return number + "th";
}

module.exports = getOrdinalNumber;
