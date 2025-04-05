function isProperFraction(numerator, denominator) {
    if (denominator === 0) return false; 
    return Math.abs(numerator) < Math.abs(denominator);
  }
// function isProperFraction(numerator, denominator) {
//     if (numerator < denominator) return true;
//     else return false;
//     // add your completed function from key-implement here
// }



module.exports = isProperFraction;