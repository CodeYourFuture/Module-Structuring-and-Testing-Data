const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

test("handles numbers ending in 2 (nd)", () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(102)).toBe("102nd");
});

test("handles numbers ending in 3 (rd)", () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(23)).toBe("23rd");
    expect(getOrdinalNumber(103)).toBe("103rd");
});

test("handles numbers ending in 11, 12, 13 (th exceptions)", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
    expect(getOrdinalNumber(111)).toBe("111th");
});

test("handles general th cases", () => {
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(20)).toBe("20th");
    expect(getOrdinalNumber(100)).toBe("100th");
});
