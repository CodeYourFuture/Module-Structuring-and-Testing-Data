const isProperFraction = require("../implement/2-is-proper-fraction");

// Case 1: Proper fraction
test("should return true for a proper fraction (numerator < denominator)", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});
//

// Case 2: Improper fraction
test("should return false for an improper fraction (numerator > denominator)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// // Case 3: Negative fraction
// test("should return true for a negative proper fraction (numerator < denominator)", () => {
//   expect(isProperFraction(-4, 7)).toEqual(true);
// });

// Case 4: Numerator equal to denominator
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Optional: Zero numerator
test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// // Case 5: Negative denominator
// test("should return true when denominator is negative and proper", () => {
//   expect(isProperFraction(2, -5)).toEqual(true);
// });

//handle all negative number scenarios

test("should correctly handle all negative number scenarios", () => {
  const cases = [
    // Proper negatives (absolute numerator < absolute denominator)
    [-4, 7, true, "-4/7 proper fraction"],
    [4, -7, true, "4/-7 proper fraction"],
    [-2, -5, true, "-2/-5 proper fraction"],

    // Improper negatives (absolute numerator >= absolute denominator)
    [-5, 2, false, "-5/2 improper fraction"],
    [5, -2, false, "5/-2 improper fraction"],
    [-7, -4, false, "-7/-4 improper fraction"],

    // Edge equal case
    [-3, -3, false, "-3/-3 equal fraction"],
  ];
  for (const [num, den, expected, desc] of cases) {
    expect(isProperFraction(num, den)).toBe(expected);
  }
});
