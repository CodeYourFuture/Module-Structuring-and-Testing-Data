// Implement a function isValidTriangle
// Terms
// the Triangle Inequality says: the sum of any two sides is always greater than the third side.
// practical examples:
// Side a = 3
// Side b = 3
// Side c = 3

// This is a valid triangle, because a plus b = 6 and 6 is greater than 3
// Another way to write this is a + b > c
// It's also true that b + c > a
// It's also true that a + c > b

// In our function isValidTriangle which takes as parameters the lengths of three sides, we need to invalidate any triangle where the sum of any two sides is less than or equal to the length of the third side.
// and we need to validate any triangle where the sum of any two sides is greater than the length of the third side.

// Acceptance criteria:

// scenario: invalid triangle
// Given the side lengths a, b, and c,
// When the sum of any two side lengths is less than or equal to the length of the third side (i.e., a + b <= c, a + c <= b, b + c <= a),
// Then it should return false because these conditions violate the Triangle Inequality, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.

// scenario: invalid triangle
// Check for Valid Input:
// Given the sides a, b, and c,
// When any of the sides are less than or equal to zero,
// Then it should return false because a triangle cannot have zero or negative side lengths.

// scenario: valid triangle
// Given valid side lengths where the sum of any two sides is greater than the third side,
// When the function is called with these values as input,
// Then it should return true because the input forms a valid triangle.

// This specification outlines the behavior of the isValidTriangle function for different input scenarios, ensuring it properly checks for invalid side lengths and whether they form a valid triangle according to the Triangle Inequality Theorem.

function isValidTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else {
    return false;
  }
}

//scenario 1
const a1 = 2;
const b1 = 3;
const c1 = 1;
const output1 = isValidTriangle(a1, b1, c1);
const expectedOutput1 = false;
console.assert(output1 == expectedOutput1, " expecting false for Scenario 1"); //passed

//scenario 2
const a2 = -3;
const b2 = 3;
const c2 = 5;
const output2 = isValidTriangle(a2, b2, c2);
const expectedOutput2 = false;
console.assert(output2 == expectedOutput2, "expecting false for scenario 2"); //passed

//scenario 3
const a3 = 3;
const b3 = 5;
const c3 = 4;
const output3 = isValidTriangle(a3, b3, c3)
const expectedOutput3 = true;
console.assert(output3 == expectedOutput3, "expecting true for scenario 3") //passed
