const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });
case 2
test("should return 10 for King of Hears", () => {
    const king of Hearts = get card getCardValue('K');
    expect(king of Hearts).toEqual(10);
}
case 3

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards: