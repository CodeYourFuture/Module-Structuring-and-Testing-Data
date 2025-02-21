
    // add your completed function from key-implement here
function isProperFraction(numerator, denominator) {
    if (denominator == 0) {
      return false;
    }
    else if (Math.abs(numerator) < denominator) {
      return true;
    }
    else if (numerator == denominator){
      return false;
    }
    return false;
}

module.exports = isProperFraction;