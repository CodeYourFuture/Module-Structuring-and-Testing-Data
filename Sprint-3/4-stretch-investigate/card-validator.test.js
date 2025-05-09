const cardValidator = require("./card-validator.js");

test("Valid card number with all correct conditions", () => {
  expect(cardValidator("1225252525251246")).toBe(true);
});

test("Card number with invalid length", () => {
  expect(cardValidator("12345678901234")).toBe(false);
});

test("Card number with non-numeric characters", () => {
  expect(cardValidator("1225A52525251246")).toEqual(false);
});

test("Card number with odd last digit", () => {
  expect(cardValidator("1225252525251247")).toBe(false);
});

test("Card number with sum less than 16", () => {
  expect(cardValidator("1000000000000000")).toBe(false);
});

test("Card number with special characters", () => {
  expect(cardValidator("100000000*004546")).toBe(false);
});
