function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator))
    return true; // added absolute value to catch negative numbers
  else return false; // everything else is not proper
}

module.exports = isProperFraction;
