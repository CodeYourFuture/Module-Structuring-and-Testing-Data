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

function isValidTriangle (a, b, c) {
//Using map allows for each value in the array to be processed, this case, to ensure that each value is a number
    const sides = [a, b, c].map(value => {
        const number = Number(value);
            if (isNaN(number)) {
            throw new Error("Please enter numeric triangle side values");
            }
        return number;
        }); 

//The extracted validated numbers need to be assigned using the destructuring method
    const [sideA, sideB, sideC] = sides;       

//This will handle when values are zero or negative: invalid triangle        
        
        if (sideA <= 0 || sideB <= 0 || sideC<= 0) {
            return false;
        }
            
//This will handle when the sum of 2 sides is not greater than the third side: invalid triangle
        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            return false;
        }

//This will handle when the criteria have all been met for a valid triangle
    return true;    
    
    }
module.exports = {isValidTriangle};   