function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  else if (numerator === denominator) return false;
  else if (numerator > denominator) return false;
  else return false;
}

module.exports = isProperFraction;
