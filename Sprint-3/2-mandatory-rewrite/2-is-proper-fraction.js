function isProperFraction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be 0"); // More appropriate than returning a string
    }

    return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;
