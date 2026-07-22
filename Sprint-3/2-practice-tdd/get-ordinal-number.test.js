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

// here are more test cases for different scenarios

describe("getOrdinalNumber", () => {
  // Case 1: Already defined in your prompt
  test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(131)).toEqual("131st");
  });

  // Case 2: Numbers ending with 2 (but not 12)
  test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(142)).toEqual("142nd");
  });

  // Case 3: Numbers ending with 3 (but not 13)
  test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(23)).toEqual("23rd");
    expect(getOrdinalNumber(153)).toEqual("153rd");
  });

  // Case 4: Numbers ending with 11, 12, 13 (The exceptions)
  test("should append 'th' for numbers ending in 11, 12, or 13", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
    expect(getOrdinalNumber(111)).toEqual("111th");
    expect(getOrdinalNumber(112)).toEqual("112th");
    expect(getOrdinalNumber(113)).toEqual("113th");
  });

  // Case 5: Numbers ending in 0, 4, 5, 6, 7, 8, or 9
  describe("numbers ending with 0, 4, 5, 6, 7, 8, or 9", () => {
    const defaultThCases = [
      { endingDigit: 0, testValues: [0, 10, 20, 100, -10] },
      { endingDigit: 4, testValues: [4, 24, 104, -4] },
      { endingDigit: 5, testValues: [5, 25, 105, -5] },
      { endingDigit: 6, testValues: [6, 26, 106, -6] },
      { endingDigit: 7, testValues: [7, 27, 107, -7] },
      { endingDigit: 8, testValues: [8, 28, 108, -8] },
      { endingDigit: 9, testValues: [9, 29, 109, -9] },
    ];
  

    defaultThCases.forEach(({ endingDigit, testValues }) => {
      test.each(testValues)(
        `appends "th" to %i (representative for digit ${endingDigit})`,
        (num) => {
          expect(getOrdinalNumber(num)).toBe(`${num}th`);
        }
      );
    });
  });
}); 
