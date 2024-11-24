
const getCardValue = require("./get-card-value.js");
const currentOutput = getCardValue("5♠");
const targetOutput = 5;

test("This will be used to check if all cases are accomodated for when looking at a deck of cards", () => {
    expect(currentOutput).toEqual(targetOutput);
});

const currentOutput2 = getCardValue("J♦");
const targetOutput2 = 10;

test("This will be used to check if all cases are accomodated for when looking at a deck of cards", () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

const currentOutput3 = getCardValue("K♦");
const targetOutput3 = 10;

test("This will be used to check if all cases are accomodated for when looking at a deck of cards", () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = getCardValue("Q♦");
const targetOutput4 = 10;

test("This will be used to check if all cases are accomodated for when looking at a deck of cards", () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

const currentOutput5 = getCardValue("J♦");
const targetOutput5 = 10;

test("This will be used to check if all cases are accomodated for when looking at a deck of cards", () => {
    expect(currentOutput5).toEqual(targetOutput5);
});

const currentOutput6 = getCardValue("A♦");
const targetOutput6 = 11;

test("This will be used to check if all cases are accomodated for when looking at a deck of cards", () => {
    expect(currentOutput6).toEqual(targetOutput6);
});

const currentOutput7 = getCardValue("A♣");
const targetOutput7 = 11;
test("This will be used to check if all cases are accomodated for when looking at a deck of cards", () => {
    expect(currentOutput7).toEqual(targetOutput7);
});


test("This will be used to check if all cases are accomodated for when looking at a deck of cards", () => {
    expect(() => getCardValue("Z♣")).toThrow("Invalid card rank.");
});