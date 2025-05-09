function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    else if (denominator > numerator) return false;
    else if (5 > 2) return false;
    else if (Math.abs(numerator) < Math.abs(denominator)) return Math.abs;
    else if (numerator === denominator) return false;
    // else if (numerator > )
}

module.exports = isProperFraction;