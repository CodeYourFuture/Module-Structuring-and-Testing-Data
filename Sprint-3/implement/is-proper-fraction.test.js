const isProperFraction = require("./is-proper-fraction.js")

test("should return false if numerator is greater than the denominator", () => {
    expect(isProperFraction(5,2)).toBe(false)
})

test("should return true if numerator is less than the denominator", () => {
    expect(isProperFraction(3,6)).toBe(true)
})

test("should return error if denominator is 0;", () => {
    expect(isProperFraction(5,0)).toBeNull()
    //.toThrow("Denominator cannot be zero")
})