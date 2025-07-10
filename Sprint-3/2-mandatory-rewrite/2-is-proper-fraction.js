function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) return true; // This version of code works correctly for proper and negative fractions.
  if (Math.abs(numerator) >= Math.abs(denominator)) return false;
  if (Math.abs(numerator) === Math.abs(denominator)) return false;
}

module.exports = isProperFraction;
