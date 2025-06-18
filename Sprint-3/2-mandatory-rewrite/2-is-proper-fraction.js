function isProperFraction(numerator, denominator) {
    if (isNaN(numerator) || isNaN(denominator)) return NaN;
    if (Math.abs(numerator) < Math.abs(denominator)) return true;
    if (Math.abs(numerator) > Math.abs(denominator)) return false;
    if (Math.abs(numerator) === Math.abs(denominator)) return false;
    
    // add your completed function from key-implement here
}

module.exports = isProperFraction;