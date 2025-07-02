const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:

test("should return the correct value for munber cards (2-10)", () => {
    expect(getCardValue("3♣")).toEqual(3);
    expect(getCardValue("7♠")).toEqual(7);
    expect(getCardValue("10♦")).toEqual(10);
    });  

test("should return 10 for face cards (J, Q, K)", () => {
    expect(getCardValue("Q♣")).toEqual(10);
    expect(getCardValue("K♥")).toEqual(10);
    expect(getCardValue("J♦")).toEqual(10);
    });  
test("should return 11 for Ace cards (A)", () => {
    expect(getCardValue("A♠")).toEqual(11);
    expect(getCardValue("A♣")).toEqual(11);
    expect(getCardValue("A♦")).toEqual(11);
    });      

test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("1♦")).toThrow("Invalid card rank");
  expect(() => getCardValue("L♥")).toThrow("Invalid card rank");
  expect(() => getCardValue("13♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("R♣")).toThrow("Invalid card rank");
});    
