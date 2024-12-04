const getCardValue = require("./get-card-value");


test("Checks if cardRank is 'A♠' then returns 11 ", () => {
    expect(getCardValue("A♠")).toEqual(11);
});

test("Checks if cardRank is 'J♦' then returns 10 ", () => {
    expect(getCardValue("J♦")).toEqual(10);
});

test("Checks if cardRank is 'K♥' then returns 10 ", () => {
    expect(getCardValue("K♥")).toEqual(10);
});

test("Checks if cardRank is 'Q♣' then returns 10 ", () => {
    expect(getCardValue("Q♣")).toEqual(10);
});

test("Checks if cardRank is '8' then returns 'Invalid card rank' ", () => {
    expect(getCardValue("10")).toEqual("Invalid card rank");
});

test("Checks if cardRank is 'Z' then returns 'Invalid card rank' ", () => {
    expect(getCardValue("Z")).toEqual("Invalid card rank");
});


test("Checks if cardRank is '2.1' then returns 'Invalid card rank", () => {
    expect(getCardValue("2.1♣")).toEqual("Invalid card rank");
});