function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false; // Avoid division by zero
  if (numerator < 0 || denominator < 0) return false; // Proper fractions are positive
  if (numerator < denominator) return true; // Proper if numerator < denominator
  return false; // Otherwise, it's improper
}

module.exports = isProperFraction;
// Test cases for the isProperFraction function
console.log(isProperFraction(1, 2)); // true
console.log(isProperFraction(3, 4)); // true
console.log(isProperFraction(5, 5)); // false
console.log(isProperFraction(7, 6)); // false
console.log(isProperFraction(0, 1)); // true
console.log(isProperFraction(1, 0)); // false (denominator is zero)
console.log(isProperFraction(-1, 2)); // false (negative numerator)
console.log(isProperFraction(1, -2)); // false (negative denominator)
console.log(isProperFraction(-1, -2)); // false (both negative)
console.log(isProperFraction(2, 3)); // true
