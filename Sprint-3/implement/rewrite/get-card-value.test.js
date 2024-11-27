const getCardValue = require("./get-card-value");

describe("Playing Card Values", () => {
  it("should return 11 for A♠", () => {
    expect(getCardValue("A♠")).toEqual(11);
  });

  it("should return 5 for 5♥", () => {
    expect(getCardValue("5♥")).toEqual(5);
  });

  it("should return 10 for Q♣", () => {
    expect(getCardValue("Q♣")).toEqual(10);
  });

  it("should return 10 for 10♦", () => {
    expect(getCardValue("10♦")).toEqual(10);
  });
});

describe("Card Error Cases ⚠️", () => {
  it("should throw 'Invalid card rank' for invalid rank", () => {
    expect(() => getCardValue("X♦")).toThrow(/Invalid card rank./);
  });
});
