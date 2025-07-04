const getCardValue = require("./3-get-card-value");

// Number cards
test("should return the correct value for number cards (2-10)", () => {
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("5♣")).toEqual(5);
  expect(getCardValue("10♥")).toEqual(10);
});

// Face cards
test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♣")).toEqual(10);
});

// Ace
test("should return 11 for Ace", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
});

// Invalid cards
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("Z♦")).toThrow("Invalid card rank");
  expect(() => getCardValue("15♥")).toThrow("Invalid card rank");
  expect(() => getCardValue("X♣")).toThrow("Invalid card rank");
});

// edge/weird cases
test("should throw for strange or malformed input", () => {
  expect(() => getCardValue("3.1416♠")).toThrow("Invalid card rank"); 
  expect(() => getCardValue("09♠")).toThrow("Invalid card rank");     
  expect(() => getCardValue("0x02♠")).toThrow("Invalid card rank");   
  expect(getCardValue("   5   ♠")).toEqual(5);                
});