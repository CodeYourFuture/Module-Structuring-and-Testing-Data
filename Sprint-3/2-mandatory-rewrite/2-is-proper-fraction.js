function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    else if (numerator > denominator) return false;
    else if (numerator <Math.abs(denominator)) return true;
    else if (numerator===denominator) return false;
    else if (denominator===0) return false;
}
    // add your completed function from key-implement here


module.exports = isProperFraction;