function isProperFraction(numerator, denominator) {
  if (numerator < 0 || denominator < 0) return false;
  return numerator < denominator;
}

module.exports = isProperFraction;
