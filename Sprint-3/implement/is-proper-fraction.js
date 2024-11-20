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
    // Check if the denominator is zero
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }

    // A proper fraction has the numerator smaller than the denominator in absolute value
    if (Math.abs(numerator) < Math.abs(denominator)) {
        return true;
    }
    
    // Otherwise, it's an improper fraction
    return false;
}

// Test cases and assertions to check the function:

// Proper fraction case: 2/3
console.assert(isProperFraction(2, 3) === true, 'Test Case 1 Failed');

// Improper fraction case: 5/2
console.assert(isProperFraction(5, 2) === false, 'Test Case 2 Failed');

// Zero denominator case: Should throw an error
try {
    isProperFraction(3, 0);
    console.assert(false, 'Test Case 3 Failed: Expected error for zero denominator');
} catch (e) {
    console.assert(e.message === 'Denominator cannot be zero', 'Test Case 3 Failed: Unexpected error message');
}

// Negative proper fraction case: -4/7
console.assert(isProperFraction(-4, 7) === true, 'Test Case 4 Failed');

// Equal numerator and denominator: 3/3
console.assert(isProperFraction(3, 3) === false, 'Test Case 5 Failed');

// Negative improper fraction: -5/2
console.assert(isProperFraction(-5, 2) === false, 'Test Case 6 Failed');

// Proper fraction with negative numerator: -2/3
console.assert(isProperFraction(-2, 3) === true, 'Test Case 7 Failed');

// Proper fraction with negative denominator: 2/-3
console.assert(isProperFraction(2, -3) === true, 'Test Case 8 Failed');

console.log("All test cases passed!");
