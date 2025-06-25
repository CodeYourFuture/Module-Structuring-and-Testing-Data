const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });


// Case 2: Handle Number Cards (2-10):
test("Should returnthe  numeric value corresponding to the rank " , () =>{
    const fiveofHearts = getCardValue("8♥");
    expect (fiveofHearts).toEqual(8)
});

// Case 3: Handle Face Cards (J, Q, K):
test("Should return ten with any face cards (J, Q, K, 10)" , () =>{
    const FaceCards = getCardValue("K♥");
    expect (FaceCards).toEqual (10)
});

// Case 4: Handle Ace (A):
test(
    "Should return 11 for Ace " , () =>{
    const Ace = getCardValue("A♥")
    expect(Ace).toEqual(11);
    }
)


// Case 5: Handle Invalid Cards:
test("Should return Invalid for Invalid Cards", () =>{
    const InvalidCard = getCardValue("0♥");
    expect(InvalidCard).toEqual("Invalid card")
});
