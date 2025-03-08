const isProperFraction = require("./2-is-proper-fraction.js");
test("should return true for a proper function (2/3)",() => {
    expect(isProperFraction(2,3)).toBe(true);
});
test("should return false for an improper fraction (5/2)",() => {
    expect(isProperFraction(5,2)). toBe(false);
});
test("should return true when numerator is zero (0/1)", () => {
    expect(isProperFraction(0,1)). toBe(true);
});
test("should return false when numerator equals denominator (3/3)",() => {
    expect(isProperFraction(3,3)).toBe(false);
});
test("should return true for a negativ proper fraction(-4/7)", () =>{
    expect(isProperFraction(-4,7)).toBe(true);
});
 