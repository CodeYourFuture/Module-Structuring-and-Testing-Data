// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

// Case 1: Ace (A)
//
describe("Ace cards", () => {
  test("returns 11 for any Ace", () => {
    expect(getCardValue("A♠")).toBe(11);
    expect(getCardValue("A♥")).toBe(11);
    expect(getCardValue("A♦")).toBe(11);
    expect(getCardValue("A♣")).toBe(11);
  });
});

//
// Case 2: Number Cards (2–10)
//
describe("Number cards", () => {
  test("returns correct numeric values for 2–10", () => {
    expect(getCardValue("2♠")).toBe(2);
    expect(getCardValue("5♥")).toBe(5);
    expect(getCardValue("9♦")).toBe(9);
    expect(getCardValue("10♣")).toBe(10);
  });
});

//
// Case 3: Face Cards (J, Q, K)
//
describe("Face cards", () => {
  test("returns 10 for J, Q, K", () => {
    expect(getCardValue("J♠")).toBe(10);
    expect(getCardValue("Q♥")).toBe(10);
    expect(getCardValue("K♦")).toBe(10);
  });
});

//
// Case 4: Invalid Cards
//
describe("Invalid cards", () => {
  test("throws error for invalid rank", () => {
    expect(() => getCardValue("1♠")).toThrow();
    expect(() => getCardValue("11♣")).toThrow();
    expect(() => getCardValue("Z♦")).toThrow();
  });

  test("throws error for invalid suit", () => {
    expect(() => getCardValue("A?")).toThrow();
    expect(() => getCardValue("10X")).toThrow();
  });

  test("throws error for missing suit or rank", () => {
    expect(() => getCardValue("A")).toThrow();
    expect(() => getCardValue("♠")).toThrow();
    expect(() => getCardValue("")).toThrow();
  });

  test("throws error for non-string input", () => {
    expect(() => getCardValue(123)).toThrow();
    expect(() => getCardValue(null)).toThrow();
    expect(() => getCardValue(undefined)).toThrow();
  });

  test("throws error for malformed multi-character ranks", () => {
    expect(() => getCardValue("AA♠")).toThrow();
    expect(() => getCardValue("A10♣")).toThrow();
  });
});