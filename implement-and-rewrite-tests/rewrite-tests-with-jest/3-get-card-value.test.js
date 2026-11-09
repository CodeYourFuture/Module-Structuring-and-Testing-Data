import { getCardValue } from "../implement/3-get-card-value.js";

test("Returns 11 for aces", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

test("Returns the correct value for number cards", () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("9♦")).toEqual(9);
  expect(getCardValue("10♣")).toEqual(10);
});

test("Returns 10 for face cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

test("Throws an error for invalid cards", () => {
  expect(() => getCardValue("invalid")).toThrow();
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("5X")).toThrow();
  expect(() => getCardValue("♠5")).toThrow();
  expect(() => getCardValue("5")).toThrow();
});
