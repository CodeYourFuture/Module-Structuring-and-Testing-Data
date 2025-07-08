function isProperFraction(numerator, denominator) {
  //if (numerator < denominator) return true;
  // add your completed function from key-implement here

  if (numerator === 0 || denominator === 0) return false;
  else if (numerator === denominator) return false;
  else if (Math.abs(numerator) < Math.abs(denominator)) return true;
  else if (Math.abs(numerator) > Math.abs(denominator)) return false;
}

module.exports = isProperFraction;
