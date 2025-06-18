const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for 5 of heart",()=>{
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5); 
})
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for J of spades",()=>{
    const jofSpades=getCardValue("J♠");
    expect(jofSpades).toEqual(10);
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
