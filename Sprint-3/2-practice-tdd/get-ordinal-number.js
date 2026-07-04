function getOrdinalNumber(num) {
  if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
    throw new Error("Input must be a non-negative integer");
  }

  const lastTwo = num % 100;
  const lastDigit = num % 10;

  // Special cases: 11th, 12th, 13th
  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    return `${num}th`;
  }

  // Normal cases
  if (lastDigit === 1) return `${num}st`;
  if (lastDigit === 2) return `${num}nd`;
  if (lastDigit === 3) return `${num}rd`;

  return `${num}th`;
}

module.exports = getOrdinalNumber;
