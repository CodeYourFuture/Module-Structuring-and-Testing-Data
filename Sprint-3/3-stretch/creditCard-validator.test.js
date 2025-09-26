const creditCardValidator = require("./creditCard-validator");

describe("creditCardValidator", () => {
  test("should return true for a 16 digit long card number", () => {
    expect(creditCardValidator("1234-5678-9012-3456")).toBe(true);
    expect(creditCardValidator("1234 5678 9012 3456")).toBe(true);
  });

  test("should return false if the card number is not digit only", () => {
    expect(creditCardValidator("1234-5678-9012-345a")).toBe(false);
    expect(creditCardValidator("1234 5678 9012 3456")).toBe(true);
  });

  test("should return false if the card number does not contain at least two different digits", () => {
    expect(creditCardValidator("1111-1111-1111-1111")).toBe(false);
    expect(creditCardValidator("1111 2222 2222 2222")).toBe(true);
  });

  test("should return false if the card number does not end with an even digit", () => {
    expect(creditCardValidator("1234-5678-9012-3457")).toBe(false);
    expect(creditCardValidator("1234 5678 9012 3456")).toBe(true);
  });

  test("should return false if the sum of all the digits is not greater than 16", () => {
    expect(creditCardValidator("0000-0000-0000-0000")).toBe(false);
    expect(creditCardValidator("1111 1111 1111 1111")).toBe(false);
    expect(creditCardValidator("1234 5678 9012 3456")).toBe(true);
  });
});
