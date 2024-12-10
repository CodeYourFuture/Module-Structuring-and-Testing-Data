/* Testing criteria
The results should either be true or false to indicate a valid triangle.
If any of the sides = 0 or a value is negative, it must return "false"
If the sum of any two sides is <= the 3rd side, it must return "false"
If the sum of any two sides is greater than the 3rd side, it must return "true"
If string characters and not numbers are input, it must throw an error "Please enter numeric triangle side values"
*/


const {isValidTriangle} = require ('../../implement/is-valid-triangle');
describe("isValidTriangle function", () => {

//Error cases
test ("should throw an error 'Please enter numeric triangle side values' when inputs are NaN", () => {
    expect(() =>isValidTriangle("triangle")).toThrow("Please enter numeric triangle side values");
    expect(() =>isValidTriangle(null)).toThrow("Please enter numeric triangle side values"); //must have entries
    expect(() =>isValidTriangle(undefined)).toThrow("Please enter numeric triangle side values"); //must be defined entries
});

//Invalid cases
test ("should return 'false' when values are equal to zero or negative", () => {
    expect(isValidTriangle(0, -4, 3)).toBe(false);
    expect(isValidTriangle(0, 0, 0)).toBe(false);
})

//There is no need to write a test to check for the sum of 2 sides being larger than the 3rd if negative and zero numbers have been handled.

//Valid cases
test ("should return 'true' when the sum of 2 sides is >= 3rd side", () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true);
})

});