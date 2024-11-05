const getCardValue = require("./get-card-value.js"); // Import the function

describe("getCardValue", () => {
  test('should return "3" for card "3B"', () => {
    expect(getCardValue("3B")).toBe("3");
  });

  test('should return "10" for card "10B"', () => {
    expect(getCardValue("10B")).toBe("10");
  });

  test('should return "11" for card "0A"', () => {
    expect(getCardValue("0A")).toBe(11);
  });

  test('should return "10" for card "0K"', () => {
    expect(getCardValue("0K")).toBe(10);
  });

  test('should return "10" for card "0Q"', () => {
    expect(getCardValue("0Q")).toBe(10);
  });

  test('should return "10" for card "0J"', () => {
    expect(getCardValue("0J")).toBe(10);
  });

  test('should return "Invalid Card rank" for invalid rank', () => {
    expect(getCardValue("1B")).toBe("Invalid Card rank");
    expect(getCardValue("0Z")).toBe("Invalid Card rank");
  });

  test('should return "Invalid Card rank" for empty string', () => {
    expect(getCardValue("")).toBe("Invalid Card rank");
  });
});
