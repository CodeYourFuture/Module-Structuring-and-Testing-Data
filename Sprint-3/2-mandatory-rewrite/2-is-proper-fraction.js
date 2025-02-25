function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true;
  // add your completed function from key-implement here
}

function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;
