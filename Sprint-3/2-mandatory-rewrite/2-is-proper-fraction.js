function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    if ( numerator === denominator) return false;
    if (numerator > denominator) return false;
    
    return Math.abs(numerator) < Math.abs(denominator); 
    // Math.Abs removes the negative in a number
}

module.exports = isProperFraction;