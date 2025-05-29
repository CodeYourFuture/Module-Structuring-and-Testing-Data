const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return the numeric value for number Cards (2-10) ",()=>{
    const NumberCards = getCardValue("3♠");
    expect(NumberCards).toEqual(3)
})
// Case 3: Handle Face Cards (J, Q, K):
test("Given a card with a rank of 10, J, Q, or K Should return 10",()=>{
    const NumberCards = getCardValue("Q♠");
    expect(NumberCards).toEqual(10)
})
// Case 4: Handle Ace (A):
test("should return 11 for a single Ace",()=>{
    const NumberCards = getCardValue("A");
    expect(NumberCards).toEqual(11)
})
// Case 5: Handle Invalid Cards:
test("should return Invalid card rank for Invalid Cards ",()=>{
    const NumberCards = getCardValue("n♠");
    expect(NumberCards).toEqual("Invalid card rank")
})




