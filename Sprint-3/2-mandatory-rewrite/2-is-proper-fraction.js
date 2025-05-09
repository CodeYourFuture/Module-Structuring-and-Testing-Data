function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  else if (Math.abs(numerator) > Math.abs(denominator)) return false;
  else if (Math.abs(numerator) == Math.abs(denominator)) return false;
}

module.exports = isProperFraction;
