function isProperFraction(numerator, denominator) {
    numerator = numerator < 0 ? Math.abs(numerator) : numerator;
    let result = numerator < denominator ? true : false;
    return result;
}
// or shorter return numerator < denominator because it already returns a boolean 

module.exports = isProperFraction;