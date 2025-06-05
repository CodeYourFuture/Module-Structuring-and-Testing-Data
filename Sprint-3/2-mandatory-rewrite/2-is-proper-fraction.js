function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true;
  // add your completed function from key-implement here
  if (numerator > denominator) return false;
  if (Math.abs(numerator) < denominator) return true;
  if (numerator === denominator) return false;
  if (denominator === 0) return false;
}

module.exports = isProperFraction;
