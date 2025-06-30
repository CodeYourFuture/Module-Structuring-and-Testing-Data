function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false;
  if (numerator < denominator) return true;
  if (numerator >= denominator) return false;
}
module.exports = isProperFraction;
