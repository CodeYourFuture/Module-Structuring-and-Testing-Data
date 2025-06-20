// add your completed function from key-implement here

function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    if (numerator > denominator) return false;

    return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;