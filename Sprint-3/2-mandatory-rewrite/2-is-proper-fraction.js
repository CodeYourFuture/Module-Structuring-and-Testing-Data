function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false;
  if (numerator === 0) return true;
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  else {
    return false;
  }
}

module.exports = isProperFraction;
