function isProperFraction(numerator, denominator) {
    if (denominator === 0) return false;
    return Math.abs(numerator) < Math.abs(denominator);
  }

module.exports = isProperFraction;


