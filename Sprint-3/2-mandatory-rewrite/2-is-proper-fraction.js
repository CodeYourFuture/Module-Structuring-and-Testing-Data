function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
}

function isProperFraction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero"); // Prevent division by zero
    }
    return Math.abs(numerator) < Math.abs(denominator); // Ensures negative fractions are handled
}

module.exports = isProperFraction;
