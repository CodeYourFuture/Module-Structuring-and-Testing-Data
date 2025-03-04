function isProperFraction(numerator, denominator) {
    if (denominator === 0) {
      return false; 
    }
    if (numerator < denominator && numerator >= 0) {
      return true; 
    } else {
      return false; 
    }
  }
  
  module.exports = isProperFraction;