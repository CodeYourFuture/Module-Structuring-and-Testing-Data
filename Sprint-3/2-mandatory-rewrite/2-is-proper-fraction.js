function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  else if (!Number.isInteger(numerator) && !Number.isInteger(denominator))
    return false;
  else return false;
}
module.exports = isProperFraction;
