const getCardValue = require("./3-get-card-value");
describe("getCardValue",()=>{
test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return the number itself for five of Hearts", () => {
    const fiveofHearts = getCardValue("9♠");
    expect(fiveofHearts).toEqual(9);
    });
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
    const faceCards = getCardValue("Q♠");
    expect(faceCards).toEqual(10);
    });
// Case 4: Handle Ace (A):
 test("should return 11 for Ace of Clubs", () => {
    const aceOfClubs = getCardValue("A♣");
    expect(aceOfClubs).toEqual(11);
  });
// Case 5: Handle Invalid Cards:
test("should return should return an Invalid card rank", () => {
    const invalid = getCardValue("Rahwa");
    expect(invalid).toEqual("Invalid card rank");
    });

test("should return should return an Invalid card rank", () => {
    const invalid11 = getCardValue("11♠");
    expect(invalid11).toEqual("Invalid card rank");
    });
})