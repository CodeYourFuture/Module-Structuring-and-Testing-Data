function isProperFraction(numerator, denominator) {
    // add your completed function from key-implement here
    return denominator !== 0 && Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;
