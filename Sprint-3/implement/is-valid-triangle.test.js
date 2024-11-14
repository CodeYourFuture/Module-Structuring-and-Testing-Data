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

function isValidTriangle(a, b, c){
    if (a + b <= c || a + c <= b || b + c <= a){
        return false;
    } else if (a <= 0 || b <= 0 || c <= 0){
        return false;
    } else if (a + b > c || a + c > b || b + c > a){
        return true;
    }
}

let triangle = isValidTriangle(-2, 4, 5);
console.log(triangle);

// console.assert tests
// Test 1
const currentOutput1 = isValidTriangle(-2, 4, 5);
const targetOutput1 = false;
console.log(currentOutput1);
console.assert(currentOutput1 === targetOutput1, `${currentOutput1} is not equal ${targetOutput1}`);

// Test 2
const currentOutput2 = isValidTriangle(5, 2, 7);
const targetOutput2 = false;
console.log(currentOutput2);
console.assert(currentOutput2 === targetOutput2, `${currentOutput2} is not equal ${targetOutput2}`);

// Test 3
const currentOutput3 = isValidTriangle(5, 0, 7);
const targetOutput3 = false;
console.log(currentOutput3);
console.assert(currentOutput3 === targetOutput3, `${currentOutput3} is not equal ${targetOutput3}`);

// Test 4
const currentOutput4 = isValidTriangle(5, 3, 4);
const targetOutput4 = true;
console.log(currentOutput4);
console.assert(currentOutput4 === targetOutput4, `${currentOutput4} is not equal ${targetOutput4}`);