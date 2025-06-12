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

// additional cases for testing:

// normal tests
test("should return 'st', 'nd', 'rd' or 'th'", () => {
  const normalInput = [
    [1, "1st"],
    [2, "2nd"],
    [3, "3rd"],
    [4, "4th"],
    [11, "11th"],
    [12, "12th"],
    [13, "13th"],
    [21, "21st"],
    [22, "22nd"],
    [23, "23rd"],
    [100, "100th"],
    [101, "101st"],
    [102, "102nd"],
    [103, "103rd"],
    [111, "111th"],
    [112, "112th"],
    [113, "113th"],
    [1000, "1000th"],
  ];

  for (const [input, expected] of normalInput) {
    expect(getOrdinalNumber(input)).toEqual(expected);
  }
});

// invalid tests
test("should throw an error for invalid ordinal numbers", () => {
  const invalidInputs = ["hello", "123abc", "", null, undefined, [], {}];

  for (const input of invalidInputs) {
    expect(() => getOrdinalNumber(input)).toThrow("Invalid ordinal number");
  }
});
