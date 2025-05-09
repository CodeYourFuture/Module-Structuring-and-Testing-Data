function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true;
  if (numerator >= denominator) return false;
}

module.exports = isProperFraction;
