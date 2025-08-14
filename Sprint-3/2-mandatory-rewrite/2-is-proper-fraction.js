function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator); // false or true
}

module.exports = isProperFraction;
