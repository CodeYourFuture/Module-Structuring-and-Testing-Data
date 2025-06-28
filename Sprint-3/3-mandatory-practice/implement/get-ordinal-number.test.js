const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    // This test checks if the function correctly identifies the ordinal number for 1
    });

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"
test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
});
// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
});
// Case 4: Identify the ordinal number for 4
// When the number is 4,
// Then the function should return "4th"
test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
});
// Case 5: Identify the ordinal number for 11
// When the number is 11,
// Then the function should return "11th"
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
});
// Case 6: Identify the ordinal number for 12
// When the number is 12,
// Then the function should return "12th"
test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toEqual("12th");
});
// Case 7: Identify the ordinal number for 13
// When the number is 13,
// Then the function should return "13th"
test("should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toEqual("13th");
});
// Case 8: Identify the ordinal number for 21
// When the number is 21,
// Then the function should return "21st"
test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
});
// Case 9: Identify the ordinal number for 22
// When the number is 22,
// Then the function should return "22nd"
test("should return '22nd' for 22", () => {
    expect(getOrdinalNumber(22)).toEqual("22nd");
});
// Case 10: Identify the ordinal number for 23
// When the number is 23,
// Then the function should return "23rd"
test("should return '23rd' for 23", () => {
    expect(getOrdinalNumber(23)).toEqual("23rd");
});
// Case 11: Identify the ordinal number for 101
// When the number is 101,
// Then the function should return "101st"
test("should return '101st' for 101", () => {
    expect(getOrdinalNumber(101)).toEqual("101st");
});
// Case 12: Identify the ordinal number for 102
// When the number is 102,
// Then the function should return "102nd"
test("should return '102nd' for 102", () => {
    expect(getOrdinalNumber(102)).toEqual("102nd");
});
// Case 13: Identify the ordinal number for 103
// When the number is 103,
// Then the function should return "103rd"
test("should return '103rd' for 103", () => {
    expect(getOrdinalNumber(103)).toEqual("103rd");
});
// Case 14: Identify the ordinal number for 111
// When the number is 111,
// Then the function should return "111th"
test("should return '111th' for 111", () => {
    expect(getOrdinalNumber(111)).toEqual("111th");
});

// Invalid Input Case: Non-number Input
// When the input is not a number,
// Then the function should throw an error indicating that the input must be a number
test("should throw an error for non-number input", () => {
    expect(() => getOrdinalNumber("not a number")).toThrow("Input must be a number");
});
// Invalid Input Case: Negative Number
// When the input is a negative number,
// Then the function should return the negative number with the appropriate ordinal suffix
test("should return '-1st' for -1", () => {
    expect(() => getOrdinalNumber(-1)).toThrow(
      "Input must be a number"
    );
});
// Invalid Input Case: Zero
// When the input is zero,
// Then the function should return "0th"
test("should return '0th' for 0", () => {
    expect(() => getOrdinalNumber(0)).toThrow(
      "Input must be a number"
    );
});