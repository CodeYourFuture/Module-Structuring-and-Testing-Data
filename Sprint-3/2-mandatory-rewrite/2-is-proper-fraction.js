function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    return undefined;
  } else if (Math.abs(numerator) < Math.abs(denominator)) {
    return true;
  } else {
    return false;
  }
}
module.exports = isProperFraction;
