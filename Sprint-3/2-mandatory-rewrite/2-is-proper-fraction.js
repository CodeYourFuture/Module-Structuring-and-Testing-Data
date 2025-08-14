function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    if (denominator === 0) return false; // Avoid division by zero
    if (numerator === 0) return true; // Zero is considered a proper fraction
    if (numerator < 0 || denominator < 0) return false; // Negative fractions are not proper
    return Math.abs(numerator) < Math.abs(denominator);
}

console.log(isProperFraction(0, 1));
console.log(isProperFraction(5,3));

module.exports = isProperFraction;