function isProperFraction(numerator, denominator) {
    // add your completed function from key-implement here
    // A proper fraction is a fraction where the absolute value of the numerator is less than the absolute value of the denominator
    if (Math.sign(numerator) === -1 && Math.sign(denominator) === -1) {
        return true; // both negative, so the fraction is proper
    }
}

module.exports = isProperFraction;