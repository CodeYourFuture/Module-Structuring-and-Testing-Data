const isProperFraction = require("./2-is-proper-fraction");

describe("isProperFraction",()=>{
test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return true for a proper fraction with one of the value negative ", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});
test("should return true for a proper fraction with both of the value negative", () => {
  expect(isProperFraction(-2, -3)).toEqual(true);
});
test("should return false for a improper fraction with both of the value equal", () => {
  expect(isProperFraction(-2, -2)).toEqual(false);
});

test("should return false for a improper fraction with numerator greater than denominator", () => {
  expect(isProperFraction(-2, 1)).toEqual(false);
});
})