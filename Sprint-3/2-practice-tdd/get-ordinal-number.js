function getOrdinalNumber(num) {
  // Last digit determines st/nd/rd for most numbers
  const lastDigit = num % 10;
  // Last two digits needed to handle special,
  // teen cases (11th, 12th, 13th)
  const lastTwo = num % 100;

  // Special rule: numbers ending in 11, 12 or 13 always use "th"
  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    return num + "th";
  }

  // Ending in 1 → "st"
  if (lastDigit === 1) return num + "st";
  // Ending in 2 → "nd"
  if (lastDigit === 2) return num + "nd";
  // Ending in 3 → "rd"
  if (lastDigit === 3) return num + "rd";
  // All other endings (0, 4-9 and anything after teen check) → "th"
  return num + "th";
}

module.exports = getOrdinalNumber;
