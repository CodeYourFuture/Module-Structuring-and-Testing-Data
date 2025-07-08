function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    return false; // Avoid division by zero
  }
  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;
