const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):..
test("should return Number Cards (2-10)", () => {
  for (let i=2; i<=10;i++){
  const card = i + "♠"
  expect(getCardValue(card)).toEqual(i);
  }
});
test("should return 2 for 2 of Spades", () => {
const twoofSpades = getCardValue("2♠");
expect(twoofSpades).toEqual(2);
})
// Case 3: Handle Face Cards (J, Q, K):.
test("should return 10 for Face Cards (J, Q, K)", () => {
  const jofSpades = getCardValue("J♠");
  expect(jofSpades).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10)
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Heart",()=>{
    const aceofHeart = getCardValue("A♥");
    expect(aceofHeart).toEqual(11);
})
// Case 5: Handle Invalid Cards:
test("should return invalid cards for anything else",()=>{
    expect(getCardValue("l")).toBe("Invalid card rank")
})

test("should return invalid cards for anything else", () => {
  expect(getCardValue("2.1♠")).toBe("Invalid card rank");
});
test("should return invalid cards for anything else", () => {
  expect(getCardValue("00_02♠")).toBe("Invalid card rank");
});