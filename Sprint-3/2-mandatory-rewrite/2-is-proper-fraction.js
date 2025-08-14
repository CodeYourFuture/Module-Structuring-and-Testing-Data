function isProperFraction(numerator, denominator) {
    if (numerator < 0 || denominator < 0) return false;
    return numerator < denominator;
    // add your completed function from key-implement here
}

module.exports = isProperFraction;