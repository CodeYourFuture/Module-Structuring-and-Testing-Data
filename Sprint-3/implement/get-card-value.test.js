const getCardValue = require("./get-card-value.js")


test("card value should return a numeric value of 2-9", () => {
    expect(getCardValue("2♠")).toBe(2)
    expect(getCardValue("5♠")).toBe(5)

});

test("card value should return a numeric value of (10, J, Q, K)", () => {
    expect(getCardValue("10♠")).toBe(10)
    expect(getCardValue("J♠")).toBe(10)
    expect(getCardValue("K♠")).toBe(10)
    expect(getCardValue("Q♠")).toBe(10)
});

test("card value should return a  value of A", () => {
    expect(getCardValue("A♠")).toBe(11)
});

test("Should throw error for a invalid card ", () => {
    expect(() => getCardValue("1♠")).toThrowError(new Error ("Invalid card rank"))
});


