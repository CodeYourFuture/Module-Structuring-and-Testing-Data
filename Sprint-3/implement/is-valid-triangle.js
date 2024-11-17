function isValidTriangle(a, b, c) {
    // Check for valid input (no zero or negative sides)
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }

    // Check the Triangle Inequality Theorem
    return a + b > c && a + c > b && b + c > a;
}

// Assertions for testing
const assert = require('assert');

// Test case: Valid triangle
assert.strictEqual(isValidTriangle(3, 3, 3), true); // Equilateral triangle
assert.strictEqual(isValidTriangle(5, 12, 13), true); // Right triangle
assert.strictEqual(isValidTriangle(7, 10, 5), true); // Scalene triangle

// Test case: Invalid triangle due to sides not satisfying the inequality
assert.strictEqual(isValidTriangle(1, 1, 3), false); // a + b <= c
assert.strictEqual(isValidTriangle(10, 1, 1), false); // a + c <= b
assert.strictEqual(isValidTriangle(1, 10, 1), false); // b + c <= a

// Test case: Invalid triangle due to non-positive sides
assert.strictEqual(isValidTriangle(-1, 4, 5), false); // Negative side length
assert.strictEqual(isValidTriangle(0, 4, 5), false);  // Zero side length
assert.strictEqual(isValidTriangle(3, 0, 5), false);  // Zero side length
assert.strictEqual(isValidTriangle(3, 4, 0), false);  // Zero side length

// Test case: Edge cases
assert.strictEqual(isValidTriangle(1, 1, 1), true); // Minimum valid triangle
assert.strictEqual(isValidTriangle(1000000, 1000000, 1000000), true); // Large valid triangle

console.log("All tests passed!");
