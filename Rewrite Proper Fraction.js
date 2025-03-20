function isProperFraction(numerator, denominator) {
    return numerator < denominator;
}

// Test cases
console.assert(isProperFraction(1, 2) === true, "Test Case 1 Failed");
console.assert(isProperFraction(2, 2) === false, "Test Case 2 Failed");

module.exports = isProperFraction;