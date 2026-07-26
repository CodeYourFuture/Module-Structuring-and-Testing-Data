const getCardValue = require("../implement/3-get-card-value");

test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A\u2660")).toEqual(11);
  expect(getCardValue("A\u2665")).toEqual(11);
});

test(`Should return numeric value for number cards 2-10`, () => {
  expect(getCardValue("2\u2665")).toEqual(2);
  expect(getCardValue("5\u2666")).toEqual(5);
  expect(getCardValue("10\u2665")).toEqual(10);
});

test(`Should return 10 for face cards J, Q, K`, () => {
  expect(getCardValue("J\u2663")).toEqual(10);
  expect(getCardValue("Q\u2666")).toEqual(10);
  expect(getCardValue("K\u2660")).toEqual(10);
});

test(`Should throw an error for invalid cards`, () => {
  expect(() => getCardValue("invalid")).toThrow();
  expect(() => getCardValue("")).toThrow();
});
