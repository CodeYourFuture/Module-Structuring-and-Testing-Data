const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):

test ("Should return 7 for 7 of spades",() => {
    const sevenSpades = getCardValue("7♠");
    expect(sevenSpades).toEqual(7);
});
// Case 3: Handle Face Cards (J, Q, K):

test ("Should return 10 fro Q of Spades", () =>{
    const queenSpades = getCardValue("Q♠");
    expect(queenSpades).toEqual(10)
});
// Case 4: Handle Ace (A):

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("Ace");
    expect(aceofSpades).toEqual(11);
    });
// Case 5: Handle Invalid Cards:

test("should return Invalid for number >10", () => {
    const imporperNumber = getCardValue("17♠");
    expect(imporperNumber).toEqual("The card is invalid");
    });
