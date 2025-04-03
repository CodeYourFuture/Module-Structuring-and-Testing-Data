function isProperFraction(numerator, denominator) {
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    if (numerator < denominator) {
        return true;
    } else if ( numerator >= denominator) {
        return false;
    }
}

console.log(isProperFraction(-3, 2));

module.exports = isProperFraction;