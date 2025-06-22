function isProperFraction(numerator, denominator) {
    if (Math.abs(numerator) < Math.abs(denominator)) {
        return true;
    } { return false; }
    if (numerator < denominator) {
        return true;
    } if (numerator === denominator) {
        return false;
    } if (denominator === 0) {
        return false;
    } 



    // add your completed function from key-implement here
}

module.exports = isProperFraction;