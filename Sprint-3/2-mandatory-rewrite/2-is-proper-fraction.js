function isProperFraction(numerator, denominator) {
  // Check for positive values and that numerator is less than denominator
  if (numerator > 0 && denominator > 0 && numerator < denominator) {
    return true;
  } else {
    return false;
  }
}

module.exports = isProperFraction;