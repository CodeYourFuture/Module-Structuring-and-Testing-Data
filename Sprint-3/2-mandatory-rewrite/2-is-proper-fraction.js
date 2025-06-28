function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    else return false; // returns false if numerator is not less than denominator
}

module.exports = isProperFraction;