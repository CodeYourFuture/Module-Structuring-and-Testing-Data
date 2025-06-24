function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true;
  // add your completed function from key-implement here
  if (numerator >= denominator) return false;
  if (numerator < 0 && Math.abs(numerator) < denominator) return true;
  if (numerator === denominator) return false;
}

module.exports = isProperFraction;
