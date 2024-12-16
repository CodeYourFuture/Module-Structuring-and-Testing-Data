const cardValidator = require("./card-validator");

describe("cardValidator Tests", () => {
  describe("Valid Number Tests", () => {
    it.each([
      {
        input: 9999777788880000,
        expected: true,
        description: "Number must be 16 digits",
      },
      {
        input: 6666666666661666,
        expected: true,
        description: "All characters must be numbers",
      },

      {
        input: "8899227766883304",
        expected: true,
        description: "At least two different digits",
      },
      {
        input: "2265566441861652",
        expected: true,
        description: "Last digit is even",
      },
      {
        input: "6264561614768652",
        expected: true,
        description: "Sum of digits greater than 16",
      },
    ])("$description", ({ input, expected }) => {
      expect(cardValidator(input)).toBe(expected);
    });
  });

  describe("Invalid Number Tests", () => {
    it.each([
      {
        input: 929673378853830,
        expected: false,
        description: "Number less than 16 digits",
      },
      {
        input: "495276#896141684",
        expected: false,
        description: "Invalid characters",
      },

      {
        input: 7777777777777777,
        expected: false,
        description: "Only one number used",
      },
      {
        input: "2265566441861651",
        expected: false,
        description: "Last digit is odd",
      },
      {
        input: "1111111111111110",
        expected: false,
        description: "Sum of digits less than 16",
      },
    ])("$description", ({ input, expected }) => {
      expect(cardValidator(input)).toBe(expected);
    });
  });
});
