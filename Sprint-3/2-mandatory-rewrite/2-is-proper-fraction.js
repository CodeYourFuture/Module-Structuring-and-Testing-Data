function isProperFraction(numerator, denominator) {
  // if (numerator < denominator) return true;
  // add your completed function from key-implement here
  return (
    numerator < denominator &&
    Number.isInteger(numerator) &&
    Number.isInteger(denominator)
  );
}

module.exports = isProperFraction;
