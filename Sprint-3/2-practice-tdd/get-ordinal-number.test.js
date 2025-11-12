const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Numbers ending in 1 except 11 -> "st"
test("should return correct suffix for numbers ending in 1 except 11", () => {
  const stNumbers = [1, 21, 101, 121];
  for (const num of stNumbers) {
    expect(getOrdinalNumber(num)).toEqual(`${num}st`);
  }
});

// Case 2: Numbers ending in 2 except 12 -> "nd"
test("should return correct suffix for numbers ending in 2 except 12", () => {
  const ndNumbers = [2, 22, 102, 122];
  for (const num of ndNumbers) {
    expect(getOrdinalNumber(num)).toEqual(`${num}nd`);
  }
});

// Case 3: Numbers ending in 3 except 13 -> "rd"
test("should return correct suffix for numbers ending in 3 except 13", () => {
  const rdNumbers = [3, 23, 103, 123];
  for (const num of rdNumbers) {
  expect(getOrdinalNumber(num)).toEqual(`${num}rd`);
  }
});

// Case 4: Numbers ending in 4-9, 0, and 11-13 -> "th"
test("should return correct suffix for numbers ending in 4-9, 0, and 11-13", () => {
  const thNumbers = [4, 5, 6, 7, 8, 9, 11, 12, 13, 100];
  for (const num of thNumbers) {
  expect(getOrdinalNumber(num)).toEqual(`${num}th`);
  }
});

