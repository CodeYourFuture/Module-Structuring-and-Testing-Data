// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
const {repeat} = require('./repeat');
describe ("repeat function", () => {
//Error case
test('should return "Please enter a positive number" if a negative number, null or undefined is input', () => {
    expect(() =>repeat("-1")).toThrow("Please enter a positive number");
    expect(() =>repeat(null)).toThrow("Please enter a positive number");
    expect(() =>repeat(undefined)).toThrow("Please enter a positive number");
});

//Typical cases

test("should return the string as is if input is 1", () => {
        expect(repeat("Hello", 1)).toBe("Hello");
        expect(repeat("12", 1)).toBe("12");
});

test("should return an empty string if input is 0", () => {
            expect(repeat("Hello", 0)).toBe("");
            expect(repeat("12", 0)).toBe("");        
}); 

test("should return repeated string if input is positive", () => {
    expect(repeat("Cat", 4)).toBe("CatCatCatCat");
    expect(repeat("4", 4)).toBe("4444");   
    expect(repeat("ManySons", 2)).toBe("ManySonsManySons");   

}); 

})
