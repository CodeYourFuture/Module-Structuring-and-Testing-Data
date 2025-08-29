// Number must be 16 digits, all of them must be numbers.
// You must have at least two different digits represented (all of the digits cannot be the same).
// The final digit must be even.
// The sum of all the digits must be greater than 16.


test("valid credit card should return true", () => {
    expect(validateCreditCard("9999777788880000")).toBe(true);
  });

