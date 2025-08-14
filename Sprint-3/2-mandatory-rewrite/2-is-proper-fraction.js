function isProperFraction(numerator, denominator) {
    if (Math.abs(numerator/denominator) >= 1) {
        return false;
    } else {
        return true;
    }
}

module.exports = isProperFraction;