function isProperFraction(numerator, denominator) {
    if (numerator < denominator) {
      return true;
    } else if(numerator > denominator || numerator == denominator || denominator == 0){
         return false; 
    }
  }  

module.exports = isProperFraction;