// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.

// Zero Denominator check:
// Input: numerator = 3, denominator = 0
// No target output: Error (Denominator cannot be zero)
// Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
// These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.

function isProperFraction(numerator, denominator) {
    // Check for zero denominator first
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }

    // A proper fraction has the absolute value of numerator less than the absolute value of denominator
    return Math.abs(numerator) < Math.abs(denominator);
}

// Test cases to verify all acceptance criteria
console.assert(isProperFraction(2, 3) === true, 
    "Test 1 Failed: 2/3 should be a proper fraction");

console.assert(isProperFraction(5, 2) === false, 
    "Test 2 Failed: 5/2 should be an improper fraction");

console.assert(isProperFraction(-4, 7) === true, 
    "Test 3 Failed: -4/7 should be a proper fraction");

console.assert(isProperFraction(3, 3) === false, 
    "Test 4 Failed: 3/3 should not be a proper fraction");

// Test zero denominator
try {
    isProperFraction(3, 0);
    console.assert(false, "Test 5 Failed: Should throw error for zero denominator");
} catch (error) {
    console.assert(error.message === "Denominator cannot be zero", 
        "Test 6 Failed: Incorrect error message for zero denominator");
}

module.exports = {isProperFraction};
