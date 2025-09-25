const creditCardValidator = require("./creditCard-validator");

describe("creditCardValidator", () => {
  test("should return true for a 16 digit long card number", () => {
    expect(creditCardValidator("1234-5678-9012-3456")).toBe(true);
    expect(creditCardValidator("1234 5678 9012 3456")).toBe(true);
  });
});
