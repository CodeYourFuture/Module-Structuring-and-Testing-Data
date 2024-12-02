const getCardValue = require("./get-card-value.js");


const currentOutput = getCardValue("5♠");
const targetOutput = 5;
test("This will check if numeric card values are correctly handled", () => {
    expect(currentOutput).toEqual(targetOutput);
});

const currentOutput2 = getCardValue("J♦");
const targetOutput2 = 10;
test("This will check if the value for a Jack card is correctly handled", () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

const currentOutput3 = getCardValue("K♦");
const targetOutput3 = 10;
test("This will check if the value for a King card is correctly handled", () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = getCardValue("Q♦");
const targetOutput4 = 10;
test("This will check if the value for a Queen card is correctly handled", () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

const currentOutput5 = getCardValue("J♦");
const targetOutput5 = 10;
test("This will check if the value for a Jack card is correctly handled", () => {
    expect(currentOutput5).toEqual(targetOutput5);
});

const currentOutput6 = getCardValue("A♦");
const targetOutput6 = 11;
test("This will check if the value for an Ace card is correctly handled", () => {
    expect(currentOutput6).toEqual(targetOutput6);
});


const currentOutput7 = getCardValue("A♣");
const targetOutput7 = 11;
test("This will check if the value for an Ace card is correctly handled", () => {
    expect(currentOutput7).toEqual(targetOutput7);
});

test("This will check if invalid card ranks throw an error", () => {
    expect(() => getCardValue("Z♣")).toThrow("Invalid card rank.");
});

test('This test will check for an invalid input option which will throw an error', () => {
    expect(() => getCardValue("010♠")).toThrow("Invalid card rank.");
})