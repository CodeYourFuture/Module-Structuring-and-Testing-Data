function validateCreditCard(cardNumber) {
  // Convert the card number to a string to handle each digit
  const cardStr = String(cardNumber);

  //  Check if the number has exactly 16 digits and contains only numbers
  if (cardStr.length !== 16 || !/^\d+$/.test(cardStr)) {
    return false;
  }

  //  Check if there are at least two different digits
  const uniqueDigits = new Set(cardStr);
  if (uniqueDigits.size < 2) {
    return false;
  }

  //  Check if the final digit is even
  const lastDigit = Number(cardStr[cardStr.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  //  Check if the sum of all digits is greater than 16
  const sumOfDigits = [...cardStr].reduce(
    (sum, digit) => sum + Number(digit),
    0
  );
  if (sumOfDigits <= 16) {
    return false;
  }

  // If all checks pass, return true (valid credit card number)
  return true;
}

describe("validateCreditCard", () => {
  test("validates a valid credit card", () => {
    expect(validateCreditCard("9999777788880000")).toBe(true);
    expect(validateCreditCard("6666666666661666")).toBe(true);
  });

  test("invalidates a card with non-numeric characters", () => {
    expect(validateCreditCard("a92332119c011112")).toBe(false);
  });

  test("invalidates a card with only one type of number", () => {
    expect(validateCreditCard("4444444444444444")).toBe(false);
  });

  test("invalidates a card with sum less than 16", () => {
    expect(validateCreditCard("1111111111111110")).toBe(false);
  });

  test("invalidates a card with an odd final digit", () => {
    expect(validateCreditCard("6666666666666661")).toBe(false);
  });
});
