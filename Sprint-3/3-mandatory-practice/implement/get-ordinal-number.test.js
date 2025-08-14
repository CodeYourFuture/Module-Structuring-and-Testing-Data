const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

describe("Identify the ordinal number for st", () => {
  [
    { input: 1, expected: "1st" },
    { input: 21, expected: "1st"},
    { input: 151, expected: "1st" },
  ].forEach(({ input, expected }) =>
    it("should return '1st' for end with 1 except 11", () => expect(getOrdinalNumber(input)).toEqual(expected))
  );
});

describe("Identify the ordinal number for nd", () => {
  [
    { input: 2, expected: "2nd" },
    { input: 32, expected: "2nd"},
    { input: 82, expected: "2nd" },
  ].forEach(({ input, expected }) =>
    it("should return '2nd' for end with 2 except 12", () => expect(getOrdinalNumber(input)).toEqual(expected))
  );
});

describe("Identify the ordinal number for rd", () => {
  [
    { input: 3, expected: "3rd" },
    { input: 1543, expected: "3rd"},
    { input: 43, expected: "3rd" },
  ].forEach(({ input, expected }) =>
    it("should return '3rd' for end with 3 except 13", () => expect(getOrdinalNumber(input)).toEqual(expected))
  );
});

describe("Identify the ordinal number for th", () => {
  [
    { input: 11, expected: "th" },
    { input: 12, expected: "th"},
    { input: 13, expected: "th" },
    { input: 4, expected: "th" },
  ].forEach(({ input, expected }) =>
    it("should return 'th' for other numbers", () => expect(getOrdinalNumber(input)).toEqual(expected))
  );
});
