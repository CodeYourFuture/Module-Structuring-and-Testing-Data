const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("Handle Number Cards 2-10", () => {
const fiveOfHearts = getCardValue("5♥");
expect(fiveOfHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("Handle Face Cards J, Q, K", () => {
const handleFace = getCardValue("Q♥");
expect(handleFace).toEqual(10);
});

// Case 4: Handle Ace (A):
test("Handle Ace (A)", () => {
const handleAce = getCardValue("A♥");
expect(handleAce).toEqual(11);
});

// // Case 5: Handle Invalid Cards:
// test("Handle Ace (A)", () => {
//     const handleAce = getCardValue("29♠");
//     expect(handleAce).toEqual("Invalid");
//     });

//Case 5: Handle Invalid Cards:
test("Handle Invalid Cards", () => {
   expect(() => getCardValue("Z♥")).toThrow("Invalid");
   expect(() => getCardValue("29♠")).toThrow("Invalid");
   expect(() => getCardValue("2.1♠")).toThrow("Invalid");
 });
