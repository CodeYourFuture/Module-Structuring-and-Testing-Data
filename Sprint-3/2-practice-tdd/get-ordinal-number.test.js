/**
 * Original file
 *
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
*
* End of file
*/

// Implementation

const getOrdinalNumber = require("./get-ordinal-number");

describe("getOrdinalNumber", () => {
  // Case 1: Numbers ending with 1 (but not 11)
  test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(101)).toEqual("101st");
    expect(getOrdinalNumber(131)).toEqual("131st");
    expect(getOrdinalNumber(1001)).toEqual("1001st");
  });

  // Case 2: Numbers ending with 2 (but not 12)
  test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(102)).toEqual("102nd");
    expect(getOrdinalNumber(132)).toEqual("132nd");
    expect(getOrdinalNumber(1002)).toEqual("1002nd");
  });

  // Case 3: Numbers ending with 3 (but not 13)
  test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(23)).toEqual("23rd");
    expect(getOrdinalNumber(103)).toEqual("103rd");
    expect(getOrdinalNumber(133)).toEqual("133rd");
    expect(getOrdinalNumber(1003)).toEqual("1003rd");
  });

  // Case 4: Numbers ending with 11, 12, or 13
  test("should append 'th' for numbers ending with 11, 12, or 13", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
    expect(getOrdinalNumber(111)).toEqual("111th");
    expect(getOrdinalNumber(112)).toEqual("112th");
    expect(getOrdinalNumber(113)).toEqual("113th");
    expect(getOrdinalNumber(1011)).toEqual("1011th");
    expect(getOrdinalNumber(1012)).toEqual("1012th");
    expect(getOrdinalNumber(1013)).toEqual("1013th");
  });

  // Case 5: All other numbers (should get "th")
  test("should append 'th' for all other numbers", () => {
    // Numbers ending with 0
    expect(getOrdinalNumber(0)).toEqual("0th");
    expect(getOrdinalNumber(10)).toEqual("10th");
    expect(getOrdinalNumber(20)).toEqual("20th");
    expect(getOrdinalNumber(100)).toEqual("100th");

    // Numbers ending with 4-9
    expect(getOrdinalNumber(4)).toEqual("4th");
    expect(getOrdinalNumber(5)).toEqual("5th");
    expect(getOrdinalNumber(6)).toEqual("6th");
    expect(getOrdinalNumber(7)).toEqual("7th");
    expect(getOrdinalNumber(8)).toEqual("8th");
    expect(getOrdinalNumber(9)).toEqual("9th");

    // Larger numbers ending with 4-9
    expect(getOrdinalNumber(24)).toEqual("24th");
    expect(getOrdinalNumber(35)).toEqual("35th");
    expect(getOrdinalNumber(46)).toEqual("46th");
    expect(getOrdinalNumber(57)).toEqual("57th");
    expect(getOrdinalNumber(68)).toEqual("68th");
    expect(getOrdinalNumber(79)).toEqual("79th");
  });

  // Edge cases
  describe("edge cases", () => {
    test("should handle zero", () => {
      expect(getOrdinalNumber(0)).toEqual("0th");
    });

    test("should handle large numbers", () => {
      expect(getOrdinalNumber(1000000)).toEqual("1000000th");
      expect(getOrdinalNumber(1000001)).toEqual("1000001st");
      expect(getOrdinalNumber(1000002)).toEqual("1000002nd");
      expect(getOrdinalNumber(1000003)).toEqual("1000003rd");
      expect(getOrdinalNumber(1000011)).toEqual("1000011th");
    });

    test("should throw error for negative numbers", () => {
      expect(() => getOrdinalNumber(-1)).toThrow("Input must be a non-negative integer");
    });

    test("should throw error for non-integer numbers", () => {
      expect(() => getOrdinalNumber(1.5)).toThrow("Input must be a non-negative integer");
    });

    test("should throw error for non-number inputs", () => {
      expect(() => getOrdinalNumber("1")).toThrow("Input must be a non-negative integer");
      expect(() => getOrdinalNumber(null)).toThrow("Input must be a non-negative integer");
      expect(() => getOrdinalNumber(undefined)).toThrow("Input must be a non-negative integer");
    });
  });
});

