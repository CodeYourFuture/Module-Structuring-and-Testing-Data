const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should handle numder cards (2-10", () => {
    const fiveOfHearts = getCardValue("5♥")
    expect(fiveOfHearts).toEqual(5)
})
// Case 3: Handle Face Cards (J, Q, K):
test("should handle J, K, Q, 10", () => {
    const kingOfHearts = getCardValue("K♥")
    expect(kingOfHearts).toEqual(10)
})
// Case 4: Handle Ace (A):
test ("should handle A", () => {
    const aceOfHearts = getCardValue("A♥")
    expect(aceOfHearts).toEqual(11)
})
// Case 5: Handle Invalid Cards:
test("should handle invalid cards", () =>{
    const invalidCards =getCardValue("dddg")
    expect(invalidCards).toEqual("Invalid card rank.")
})
