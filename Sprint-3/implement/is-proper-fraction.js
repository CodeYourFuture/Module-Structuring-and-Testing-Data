function isProperFraction(numerator, denominator) {
    // Check for zero denominator
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    }

    // Return true if the fraction is proper
    return Math.abs(numerator) < Math.abs(denominator);
}

// Assertions for testing
const assert = require('assert');

// Test cases for proper fractions
assert.strictEqual(isProperFraction(2, 3), true);  // Proper fraction
assert.strictEqual(isProperFraction(-4, 7), true); // Negative proper fraction

// Test cases for improper fractions
assert.strictEqual(isProperFraction(5, 2), false);  // Improper fraction
assert.strictEqual(isProperFraction(3, 3), false);  // Equal numerator and denominator

// Test case for zero denominator
assert.throws(() => isProperFraction(3, 0), /Denominator cannot be zero/);

// Additional edge cases
assert.strictEqual(isProperFraction(-2, -3), true);  // Proper fraction with negative numerator and denominator
assert.strictEqual(isProperFraction(0, 5), true);    // Proper fraction when numerator is zero

// If all tests pass
console.log("All tests passed!");
