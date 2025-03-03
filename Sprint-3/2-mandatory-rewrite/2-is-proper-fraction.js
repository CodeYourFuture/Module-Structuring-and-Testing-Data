function isProperFraction(numerator, denominator) {
    if(denominator===0){
        return false;//in fraction denominator 0 is undefined
    }
    let absoluteNumerator = Math.abs(numerator);
    let absoluteDenominator = Math.abs(denominator);
    return absoluteNumerator < absoluteDenominator;
    // add your completed function from key-implement here
}

module.exports = isProperFraction;