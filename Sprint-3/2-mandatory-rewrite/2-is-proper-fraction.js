function isProperFraction(numerator, denominator) {
  // if (numerator < denominator) return true;
  // if (numerator > denominator) return false;
  // if (numerator === denominator) return false;
  if (denominator === 0) throw new Error("Denominator cannot be zero");
  if (numerator * denominator <= 0) return false; // Check for negative fractions or zero
  return Math.abs(numerator) < Math.abs(denominator);
  // add your completed function from key-implement here
}

module.exports = isProperFraction;
