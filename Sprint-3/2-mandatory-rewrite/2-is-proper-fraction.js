function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    if (numerator === denominator)return false;
    if (numerator > denominator)return false;
    if (Math.abs(numerator) < Math.abs(denominator)) return true;
    return false;
    
    
    // add your completed function from key-implement here
    function isProperFraction(numerator, denominator) {
  // Check if denominator is 0 to avoid division by zero
  if (denominator === 0) return false;

  // A proper fraction must have both parts positive
  if (numerator < 0 || denominator < 0) return false;

  // Numerator must be less than denominator
  return numerator < denominator;
}

module.exports = isProperFraction;

}

module.exports = isProperFraction;