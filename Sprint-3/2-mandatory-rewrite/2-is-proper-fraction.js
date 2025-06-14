function isProperFraction(numerator, denominator) {
  // add your completed function from key-implement here
  if (Math.abs(numerator) < denominator) return true;
  else if (Math.abs(numerator) > denominator) return false;
  else return false;
}

module.exports = isProperFraction;
