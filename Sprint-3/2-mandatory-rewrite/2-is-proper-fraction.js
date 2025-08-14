function isProperFraction(numerator, denominator) {
    if (Math.abs(numerator) < Math.abs(denominator)) return true;
    // add your completed function from key-implement here
    if (Math.abs(numerator) >= Math.abs(denominator)) return false;
    // Handle edge cases
    if (denominator === 0) return false; // Denominator cannot be zero
    if (numerator === 0) return true; // Zero numerator is a proper fraction
    return false; // Default case for any other conditions
}


module.exports = isProperFraction;