function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be 0");
  }
  const absoluteNumerator = Math.abs(numerator);
  const absoluteDenominator = Math.abs(denominator);
  return absoluteNumerator < absoluteDenominator;
}

module.exports = isProperFraction;
