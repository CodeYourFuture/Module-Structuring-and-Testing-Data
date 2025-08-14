function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true;
  if (numerator >= denominator) return false;
  if (numerator === 0) return false;
}

module.exports = isProperFraction;
