function isProperFraction(numerator, denominator) {
    // Handle case where the denominator is zero
    if (denominator === 0) {
      throw new Error('Denominator cannot be zero');
    }
  
    // A proper fraction is one where the absolute value of the numerator is less than the denominator
    if (Math.abs(numerator) < Math.abs(denominator)) {
      return true;
    }
  
    // Otherwise, it's an improper fraction
    return false;
  }
  
  module.exports = isProperFraction;
  
