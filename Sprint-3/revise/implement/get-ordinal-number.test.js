// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(number) {
  if (typeof number !== "number" || number < 1 || !Number.isInteger(number)) {
    throw new Error("Invalid input: number must be a positive integer.");
  }

  const suffixes = ["th", "st", "nd", "rd"];
  const remainder = number % 100;

  if (remainder >= 11 && remainder <= 13) {
    return `${number}th`;
  }

  const lastDigit = number % 10;
  return `${number}${suffixes[lastDigit] || "th"}`;
}

describe("getOrdinalNumber", () => {
  test("should return correct ordinal suffix for numbers", () => {
    const cases = [
      { input: 1, expected: "1st" },
      { input: 2, expected: "2nd" },
      { input: 3, expected: "3rd" },
      { input: 4, expected: "4th" },
      { input: 11, expected: "11th" },
      { input: 12, expected: "12th" },
      { input: 13, expected: "13th" },
      { input: 21, expected: "21st" },
      { input: 22, expected: "22nd" },
      { input: 23, expected: "23rd" },
      { input: 101, expected: "101st" },
      { input: 102, expected: "102nd" },
      { input: 103, expected: "103rd" },
      { input: 104, expected: "104th" },
      { input: 111, expected: "111th" },
      { input: 112, expected: "112th" },
      { input: 113, expected: "113th" },
      { input: 200, expected: "200th" },
      { input: 1000, expected: "1000th" },
    ];

    cases.forEach(({ input, expected }) => {
      const result = getOrdinalNumber(input);
      expect(result).toBe(expected);
    });
  });
  test("should throw an error for invalid inputs", () => {
    const invalidInputs = [-1, 0, 1.5, "10", null, undefined, {}, []];

    invalidInputs.forEach((input) => {
      expect(() => getOrdinalNumber(input)).toThrow(
        "Invalid input: number must be a positive integer."
      );
    });
  });
});
