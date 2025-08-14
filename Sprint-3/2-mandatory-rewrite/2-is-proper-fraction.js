function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    if (numerator > denominator) return false;
    if (numerator === denominator) return false;

    // add your completed function from key-implement here
}

module.exports = isProperFraction;