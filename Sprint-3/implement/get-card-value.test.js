const getCardValue = require("./get-card-value");

const currentOutput = getCardValue("A♠");
const targetOutput = 11;

test("Checks if cardRank is 'A♠' then returns 11 ", () => {
    expect(currentOutput).toEqual(targetOutput);
});

const currentOutput2 = getCardValue("J♦");
const targetOutput2 = 10;

test("Checks if cardRank is 'J♦' then returns 10 ", () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

const currentOutput3 = getCardValue("K♥");
const targetOutput3 = 10;

test("Checks if cardRank is 'K♥' then returns 10 ", () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = getCardValue("Q♣");
const targetOutput4 = 10;

test("Checks if cardRank is 'Q♣' then returns 10 ", () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

const currentOutput5 = getCardValue("Q♣");
const targetOutput5 = 10;

test("Checks if cardRank is 'Q♣' then returns 10 ", () => {
    expect(currentOutput5).toEqual(targetOutput5);
});

const currentOutput6 = getCardValue("Q♣");
const targetOutput6 = 10;

test("Checks if cardRank is '8♣' then returns 8 ", () => {
    expect(currentOutput6).toEqual(targetOutput6);
});