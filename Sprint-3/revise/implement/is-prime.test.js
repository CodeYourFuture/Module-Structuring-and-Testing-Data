// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const {isPrime} = require ('./is-prime');
describe ("isPrime function", () => {

//Error cases
test("Please enter a valid number", () => {
    expect(() =>isPrime("Prime")).toThrow("Please enter a number");//must be a number
    expect(() =>isPrime(null)).toThrow("Please enter a number"); //must have an entry
    expect(() =>isPrime(undefined)).toThrow("Please enter a number"); //must be an entry
});

//Typical cases
test("should return false if input is 1", () => {
    expect(isPrime("1")).toBe(false);
}); 

test("should return true if input is 2 or 3", () => {
    expect(isPrime("2")).toBe(true);
    expect(isPrime("3")).toBe(true);
}); 

test("should return false if input is divisible by 2 or 3", () => {
    expect(isPrime("6")).toBe(false);
    expect(isPrime("9")).toBe(false);
}); 

test("should return true if input is not divisible by 2 or 3", () => {
    expect(isPrime("7")).toBe(true);
    expect(isPrime("11")).toBe(true);
}); 

});









