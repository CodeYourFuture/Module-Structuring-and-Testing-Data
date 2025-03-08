function isProperFraction(numerator, denominator) {
    // Handle cases where the denominator is zero or less
    if (denominator <= 0) {
        throw new Error('Denominator must be greater than zero');
    }
  
    // Proper fraction if absolute value of numerator is less than denominator
    return Math.abs(numerator) < Math.abs(denominator);
  }
  


module.exports = isProperFraction;