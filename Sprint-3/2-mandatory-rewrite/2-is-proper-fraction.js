function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    if (numerator > denominator) return false;
    if (-numerator > denominator) return true;
    if (numerator === denominator) return false;
    else return "Error";
}

module.exports = isProperFraction;