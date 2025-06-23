function isProperFraction(numerator, denominator) {
    if (numerator < 0 ) numerator *= -1;
    if (denominator < 0 ) denominator *= -1;
    if (numerator < denominator) return true;
    if (numerator >= denominator) return false;
}

module.exports = isProperFraction;