function isProperFraction(numerator, denominator) {
 return denominator === 0 ?  false : Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;