function isProperFraction(numerator, denominator) {
  // Case 1: Check for zero denominator (undefined)
  if (denominator === 0) return false;

  // Case 2: Check for negative values (numerator or denominator)
  if (numerator < 0 || denominator < 0) return false;

  // Case 3: Check for equal numerator and denominator
  if (numerator === denominator) return false;

  // Case 4: Check for proper fraction (numerator < denominator)
  return numerator < denominator;
}
module.exports = isProperFraction;
// usage examples
console.log(isProperFraction(2, 3)); // true
console.log(isProperFraction(5, 3)); // false
console.log(isProperFraction(3, 3)); // false
console.log(isProperFraction(-2, 3)); // false
console.log(isProperFraction(2, -3)); // false
console.log(isProperFraction(0, 5)); // true (0 < 5)
console.log(isProperFraction(2, 2)); // false

// Test cases for the isProperFraction function
// test("should return true for a proper fraction", () => {
//   expect(isProperFraction(2, 3)).toEqual(true);
// });
