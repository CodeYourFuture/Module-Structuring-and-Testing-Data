const getCardValue = require("../implement/3-get-card-value");
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
describe("Number Cards", () => {
  test(`Should return 5 for 5♥`, () => {
    expect(getCardValue("5♥")).toEqual(5);
  });
  test(`Should return 10 for 10♥`, () => {
    expect(getCardValue("10♥")).toEqual(10);
  });
});
describe("Face Cards", () => {
  test(`Should return 10 for J♣`, () => {
    expect(getCardValue("J♣")).toEqual(10);
  });
  test(`Should return 10 for Q♦`, () => {
    expect(getCardValue("Q♦")).toEqual(10);
  });
  test(`Should return 10 for K♦`, () => {
    expect(getCardValue("K♦")).toEqual(10);
  });
});
describe("Invalid Cards", () => {
  test("throws error for invalid card", () => {
    expect(() => {
      getCardValue("10");
    }).toThrow();
  });
  test("throws error for invalid card", () => {
    expect(() => {
      getCardValue("A");
    }).toThrow();
  });
  test("throws error for invalid card", () => {
    expect(() => {
      getCardValue("10x");
    }).toThrow();
  });
  test("throws error for invalid card", () => {
    expect(() => {
      getCardValue("JK");
    }).toThrow();
  });
  test("throws error for invalid card", () => {
    expect(() => {
      getCardValue("Qxx");
    }).toThrow();
  });
});
