function isProperFraction(numerator, denominator) {
  // ensure that the both inputs are evaluated to positive numbers by using Math.abs(), eg -4 returns 4, 4 returns 4, and 0 returns 0
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  return false; //if the inputs don't satisfy the expression it returns false
}

module.exports = isProperFraction;
