
function isProperFraction(numerator, denominator) {
  // Check for invalid fraction (denominator cannot be zero)
  if (denominator === 0) {
    return false;
  }
  // Check if the absolute value of the numerator is less than the absolute value of the denominator
  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;
