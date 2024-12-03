
const cardValidator = require("./cardValidator");


test("Checks if the number has 16 digits.", () => {
    expect(cardValidator("1243578569873476")).toEqual(true)
});

test("Checks if the sum of all digits is greater than 16", () => {
    expect(cardValidator("1243578569874798")).toEqual(true)
});

test("Checks if at least two different digits are represented", () => {
    expect(cardValidator("1243578569874798")).toEqual(true)
});

test("Checks if the number is all numbers", () => {
    expect(cardValidator("1243c78569873b79")).toEqual(false)
});

test("Checks if the final digit is even", () => {
    expect(cardValidator("1243578569873479")).toEqual(false)
});