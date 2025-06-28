function isProperFraction(numerator, denominator) {
    // add your completed function from key-implement here
    // A proper fraction is a fraction where the absolute value of the numerator is less than the absolute value of the denominator
    if (Math.sign(numerator) === -1 && Math.sign(denominator) === -1) {
        return true; // both negative, so the fraction is proper
    }
    if (Math.sign(numerator) === 1 && Math.sign(denominator) === 1) {
        return numerator < denominator; // both positive, check if numerator is less than denominator
    }
    if (Math.sign(numerator) === -1 && Math.sign(denominator) === 1) {
        return false; // negative numerator and positive denominator, not a proper fraction
    }
    if (Math.sign(numerator) === 1 && Math.sign(denominator) === -1) {
        return false; // positive numerator and negative denominator, not a proper fraction
    }
    return false; // if none of the above conditions are met, return false
    // Note: The function assumes that the denominator is not zero, as division by zero is
    // undefined in mathematics. If you want to handle that case, you can add a check
    // for denominator === 0 and return an appropriate value or throw an error.
}

module.exports = isProperFraction;