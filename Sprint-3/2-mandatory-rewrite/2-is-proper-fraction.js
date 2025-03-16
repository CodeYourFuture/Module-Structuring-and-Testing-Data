function isProperFraction(numerator, denominator) {
    if (numerator < denominator && numerator >= 0 && denominator > 0) return true;
    // add your completed function from key-implement here

    if (numerator >= denominator || numerator < 0 || denominator <= 0) return false;

    return false;
}

module.exports = isProperFraction;
