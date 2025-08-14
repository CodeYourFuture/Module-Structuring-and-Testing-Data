function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    if (Math.abs(numerator)  < Math.abs(denominator)) return true;
    else return false;
}

module.exports = isProperFraction;