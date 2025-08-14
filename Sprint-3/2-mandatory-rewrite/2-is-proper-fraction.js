function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    return false;
  } else if (Math.abs(numerator) < Math.abs(denominator)) {
    return true;
  } else {
    return false;
  }
}

// This version of code works correctly for proper and negative fractions.
module.exports = isProperFraction;
