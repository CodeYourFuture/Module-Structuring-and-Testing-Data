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

function isProperFraction(numerator, denominator){
    if (denominator === 0) {
        return "Error (Denominator cannot be zero)";
    } else if(numerator < denominator){
        return true;
    } else if (numerator > denominator) {
        return false;
    } else if(numerator < 0 && numerator < denominator){
        return true;
    } else if(numerator === denominator) {
        return false;
    }
}

// console.assert tests
// Test 1
const currentOutput1 = isProperFraction(2, 3);
const targetOutput1 = true;
console.log(currentOutput1);
console.assert(currentOutput1 === targetOutput1, `${currentOutput1} is not equal ${targetOutput1}`);

// Test 2
const currentOutput2 = isProperFraction(5, 2);
const targetOutput2 = false;
console.log(currentOutput2);
console.assert(currentOutput2 === targetOutput2, `${currentOutput2} is not equal ${targetOutput2}`);

// Test 3
const currentOutput3 = isProperFraction(3, 0);
const targetOutput3 = "Error (Denominator cannot be zero)";
console.log(currentOutput3);
console.assert(currentOutput3 === targetOutput3, `${currentOutput3} is not equal ${targetOutput3}`);

// Test 4
const currentOutput4 = isProperFraction(-4, 7);
const targetOutput4 = true;
console.log(currentOutput4);
console.assert(currentOutput4 === targetOutput4, `${currentOutput4} is not equal ${targetOutput4}`);

// Test 5
const currentOutput5 = isProperFraction(3, 3);
const targetOutput5 = false;
console.log(currentOutput5);
console.assert(currentOutput5 === targetOutput5, `${currentOutput5} is not equal ${targetOutput5}`);

// Jest tests
test("fraction check", () => {
    expect(isProperFraction(2, 3)).toBe(true);
    expect(isProperFraction(5, 2)).toBe(false);
    expect(isProperFraction(3, 0)).toBe("Error (Denominator cannot be zero)");
    expect(isProperFraction(-4, 7)).toBe(true);
    expect(isProperFraction(3, 3)).toBe(false);  
});