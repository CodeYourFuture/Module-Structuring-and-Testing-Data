function isProperFraction(numerator, denominator) {
  // A proper fraction is a fraction where the absolute value of the numerator is less than the denominator.
  if (Math.abs(numerator) < denominator) {
    return true;
  }
  return false;
}

module.exports = isProperFraction;
