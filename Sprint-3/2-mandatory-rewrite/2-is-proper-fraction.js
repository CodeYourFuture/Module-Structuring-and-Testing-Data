function isProperFraction(numerator, denominator) {
    if (
      numerator < denominator &&
      numerator % 1 === 0 &&
      denominator % 1 === 0 &&
      numerator !== 0
    )
      return true;
    else if (numerator > denominator) return false;
    else if ((numerator = denominator)) return false;
    else if (numerator % 1 !== 0 || denominator % 1 !== 0) return false;
    else if (numerator === 0 || denominator === 0) return false;
    
    // add your completed function from key-implement here
}

module.exports = isProperFraction;