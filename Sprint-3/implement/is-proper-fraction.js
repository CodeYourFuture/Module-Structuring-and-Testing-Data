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
/*
so we making a function to check if its a fraction, start like the previous two, TDD. write the tests and the basic boiler of what i know for sure then work backwards it somehow works better.
def isProperFraction(numerator(int), denominator(int)){
    if numerator< denominator return true
    else false}

    jest9copied from previous code and just adapted but we should work these over for more errors: 
    describe('isProperFraction', () => {
    it('identifies  if it is a proper fraction', () => {
        expect(isProperFraction(0,-1)).toBe('false');
    });
    it('identifies  if it is a proper fraction', () => {
        expect(isProperFraction(10,100)).toBe('true');
    });
    it('identifies  if it is a proper fraction', () => {
        expect(isProperFraction(50,50.7)).toBe('true');
    });
    it('identifies  that this is not a fraction', () => {
        expect(isProperFraction(-13,13)).toBe('false');  // Fixed the expected value
    });
    it('identifies reflex angles', () => {  
        expect(isProperFraction(-n,E)).toBe('true');
    });
    it('identifies invalid angles', () => {
        expect(isProperFraction(x,y)).toBe('true');
    });
});

*/