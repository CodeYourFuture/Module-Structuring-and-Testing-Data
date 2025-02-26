const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, parseInt(rank));

// Case 3: Handle Face Cards (J, Q, K):
const fiveofCard = getCardValue("Q♥");
assertEquals(fiveofCard, 10);

// Case 4: Handle Ace (A):
const fiveofAce = getCardValue("A♥");
assertEquals(fiveofAce, 11);

// Case 5: Handle Invalid Cards:
const fiveofInvalid = getCardValue("Z♥");
assertEquals(fiveofInvalid, Error);
