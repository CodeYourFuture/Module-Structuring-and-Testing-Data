const validateCard = require("./card-validator");

test("should have 16 digits, all numbers", () => {
  const cardNumber = 9999777788880000;
  const result = validateCard(cardNumber);
  expect(result).toBe("Valid card");
});

test("should not have less than 16 digits", () => {
  const cardNumber = 99997777;
  const result = validateCard(cardNumber);
  expect(result).toBe("Invalid card");
});

test("should have at least two different distinct digits", () => {
  const cardNumber = 9999777788880000;
  const result = validateCard(cardNumber);
  expect(result).toBe("Valid card");
});

test("should have even final digit", () => {
  const cardNumber = 6666666666661666;
  const result = validateCard(cardNumber);
  expect(result).toBe("Valid card");
});

test("total sum of numbers should be greater than 15", () => {
  const cardNumber = 6666666666661666;
  const result = validateCard(cardNumber);
  expect(result).toBe("Valid card");
});

test("single repeating digit is invalid", () => {
  const cardNumber = 4444444444444444;
  const result = validateCard(cardNumber);
  expect(result).toBe("Invalid card");
});

test("digits cannot include non numerals", () => {
  const cardNumber = "a92332119c011112";
  const result = validateCard(cardNumber);
  expect(result).toBe("Invalid card");
});
