const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
// Case 2: Identify the ordinal number for 2
// When the number is 2,
// The function should then return "2nd".

test("Should return `2nd` for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// The Function should the return "3rd"

test("Should return `3rd` for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
});