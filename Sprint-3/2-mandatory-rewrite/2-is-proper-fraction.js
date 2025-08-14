function isProperFraction(numerator, denominator) {
    if (numerator < denominator) {
        return true;
    } else if ( numerator >= denominator) {
        return false;
    }
}

module.exports = isProperFraction;