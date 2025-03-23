function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    else if (numerator > denominator) return false;
    else if(numerator === denominator) return false;

}

module.exports = isProperFraction;