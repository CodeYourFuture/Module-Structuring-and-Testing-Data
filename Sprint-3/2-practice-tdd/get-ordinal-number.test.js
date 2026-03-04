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

// Case 2: Numbers ending with 2 (but not 12)
// When the number ends with 2, except for those ending with 12,
// Then the function should return a string by appending "nd" to the number.
 test("returns 'nd' for 2, 22, 102", () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(102)).toBe("102nd");
  });

// Case 3: Numbers ending with 3 (but not 13)
// When the number ends with 3, except for those ending with 13,
// Then the function should return a string by appending "rd" to the number.
  test("returns 'rd' for 3, 23, 103", () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(23)).toBe("23rd");
    expect(getOrdinalNumber(103)).toBe("103rd");
  });

// Case 4: All other numbers including umbers ending with 11, 12 or 13
// These are for all other numbers including special cases and should always end with "th",
// Then the function should return a string by appending "th" to the number.
test("returns 'th' for all other numbers including those ending with 11, 12, 13", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
    expect(getOrdinalNumber(10)).toBe("10th");
    expect(getOrdinalNumber(99)).toBe("99th");
    expect(getOrdinalNumber(100)).toBe("100th");

  });