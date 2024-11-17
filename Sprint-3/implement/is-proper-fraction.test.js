// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return Math.abs(numerator) < Math.abs(denominator);
}
// Acceptance criteria:
describe("isProperFraction", () => {
  // Proper Fraction check:
  // Input: numerator = 2, denominator = 3
  // target output: true
  // Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
  test("should return true for proper fractions (2/3)", () => {
    expect(isProperFraction(2, 3)).toBe(true);
  });
  // Improper Fraction check:
  // Input: numerator = 5, denominator = 2
  // target output: false
  // Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
  test("should return false for improper fractions (5/2) ", () => {
    expect(isProperFraction(5, 2)).toBe(false);
  });
  // Zero Denominator check:
  // Input: numerator = 3, denominator = 0
  // No target output: Error (Denominator cannot be zero)
  // Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.
  test("should throw an error if denominator is zero (3/0) ", () => {
    expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero");
  });
  // Negative Fraction check:
  // Input: numerator = -4, denominator = 7
  // target output: true
  // Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
  test("should return true for proper fractions (-4/7) ", () => {
    expect(isProperFraction(-4, 7)).toBe(true);
  });
  // Equal Numerator and Denominator check:
  // Input: numerator = 3, denominator = 3
  // target output: false
  // Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
  test("should return false for improper fractions (3/3)", () => {
    expect(isProperFraction(3, 3)).toBe(false);
  });
  // These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.
});
