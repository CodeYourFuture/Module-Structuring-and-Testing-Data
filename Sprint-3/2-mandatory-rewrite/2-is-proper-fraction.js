function isProperFraction(numerator, denominator) {
    if (Math.abs(numerator) < Math.abs(denominator)) {
        return true;
    } else {
        return false;
    }
}

module.exports = isProperFraction;