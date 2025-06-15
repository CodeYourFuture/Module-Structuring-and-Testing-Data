function isProperFraction(numerator, denominator) {
    if (denominator === 0) return false;
    if (numerator < 0 || denominator < 0) return false;
    if (numerator >= denominator) return false;
    return true;
}


module.exports = isProperFraction;