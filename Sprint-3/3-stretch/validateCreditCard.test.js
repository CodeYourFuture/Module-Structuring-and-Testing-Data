test("valid credit card numbers should return true", () => {
  expect(validateCreditCard("9999777788880000")).toBe(true);
  expect(validateCreditCard("6666666666661666")).toBe(true);
});

test("invalid cards with letters should return false", () => {
  expect(validateCreditCard("a92332119c011112")).toBe(false);
});

test("invalid cards with all same digits should return false", () => {
  expect(validateCreditCard("4444444444444444")).toBe(false);
});

test("invalid cards with sum less than 16 should return false", () => {
  expect(validateCreditCard("1111111111111110")).toBe(false);
});

test("invalid cards with odd final digit should return false", () => {
  expect(validateCreditCard("6666666666666661")).toBe(false);
}); 