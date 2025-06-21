function isProperFraction(numerator, denominator) {
     return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;