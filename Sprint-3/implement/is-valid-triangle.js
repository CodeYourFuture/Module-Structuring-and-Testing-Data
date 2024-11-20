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
    // Check if any side is less than or equal to zero
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    
    // Apply the Triangle Inequality Theorem conditions
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}

// Test Cases
function runTests() {
    console.log("Test 1: Valid Triangle (a = 3, b = 3, c = 3)");
    console.log(isValidTriangle(3, 3, 3)); // Expected: true
    
    console.log("\nTest 2: Invalid Triangle with side = 0 (a = 0, b = 3, c = 4)");
    console.log(isValidTriangle(0, 3, 4)); // Expected: false
    
    console.log("\nTest 3: Invalid Triangle (a = 1, b = 2, c = 3)");
    console.log(isValidTriangle(1, 2, 3)); // Expected: false
    
    console.log("\nTest 4: Valid Triangle (a = 5, b = 6, c = 7)");
    console.log(isValidTriangle(5, 6, 7)); // Expected: true
    
    console.log("\nTest 5: Invalid Triangle (a = -1, b = 5, c = 6)");
    console.log(isValidTriangle(-1, 5, 6)); // Expected: false
    
    console.log("\nTest 6: Valid Triangle with larger numbers (a = 10, b = 20, c = 30)");
    console.log(isValidTriangle(10, 20, 30)); // Expected: true

    console.log("\nTest 7: Invalid Triangle (a = 10, b = 5, c = 100)");
    console.log(isValidTriangle(10, 5, 100)); // Expected: false
}

// Run the tests
runTests();
