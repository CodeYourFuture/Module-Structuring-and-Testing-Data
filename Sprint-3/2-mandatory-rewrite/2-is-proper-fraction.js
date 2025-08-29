// Explanation:
// It checks if the absolute value of the numerator 
// is less than the absolute value of the denominator.


function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
  }

  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;

