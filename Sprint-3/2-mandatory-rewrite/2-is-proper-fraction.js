function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    if (denominator === 0) return "Error: Denominator cannot be 0";
    if (Math.abs(numerator)  < denominator) return true;
    if (Math.abs(numerator) >= denominator) return false;
}

module.exports = isProperFraction;