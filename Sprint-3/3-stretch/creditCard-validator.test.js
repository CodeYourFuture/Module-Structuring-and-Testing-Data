const creditCardValidator = require("./creditCard-validator");

describe("creditCardValidator", () => {
  test("should return true for a 16 digit long card number", () => {
    expect(creditCardValidator("1234-5678-9012-3456")).toBe(true);
    expect(creditCardValidator("1234 5678 9012 3456")).toBe(true);
  });

  test("should return false if the card number is not digit only", () => {
    expect(creditCardValidator("1234-5678-abcd-3456")).toBe(false);
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

  // test for less than 16 digits
  test("should return false for a card number with less than 16 digits", () => {
    expect(creditCardValidator("123456789012345")).toBe(false);
    expect(creditCardValidator("1234-5678-9012-345")).toBe(false);
  });

  // test for more than 16 digits
  test("should return false for a card number with more than 16 digits", () => {
    expect(creditCardValidator("12345678901234567")).toBe(false);
    expect(creditCardValidator("1234-5678-9012-34567")).toBe(false);
  });

  // test for only 16 digits without spaces or dashes
  test("should return true for a card number with 16 digits without spaces or dashes", () => {
    expect(creditCardValidator("1234567890123456")).toBe(true);
    expect(creditCardValidator("0000000000000000")).toBe(false);
    expect(creditCardValidator("1111111111111111")).toBe(false);
  });
});
