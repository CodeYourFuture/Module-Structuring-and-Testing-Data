import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Ace returns 11", () => {
  assert.equal(getCardValue("A♠"), 11);
  assert.equal(getCardValue("A♥"), 11);
  assert.equal(getCardValue("A♦"), 11);
  assert.equal(getCardValue("A♣"), 11);
});

test("Face cards return 10", () => {
  assert.equal(getCardValue("J♣"), 10);
  assert.equal(getCardValue("Q♦"), 10);
  assert.equal(getCardValue("K♥"), 10);
});

test("Number cards return their numerical value", () => {
  assert.equal(getCardValue("2♥"), 2);
  assert.equal(getCardValue("3♥"), 3);
  assert.equal(getCardValue("4♥"), 4);
  assert.equal(getCardValue("5♥"), 5);
  assert.equal(getCardValue("6♥"), 6);
  assert.equal(getCardValue("7♥"), 7);
  assert.equal(getCardValue("8♥"), 8);
  assert.equal(getCardValue("9♥"), 9);
  assert.equal(getCardValue("10♥"), 10);
});

test("Invalid rank throws an error", () => {
  assert.throws(() => getCardValue("X♠"), {
    message: 'Expected a number followed by a suit, but got "X♠"',
  });
});

test("Invalid suit throws an error", () => {
  assert.throws(() => getCardValue("9X"), {
    message: 'Expected a number followed by a suit, but got "9X"',
  });
});

test("Malformed input throws an error", () => {
  assert.throws(() => getCardValue("invalid"), {
    message: 'Expected a number followed by a suit, but got "invalid"',
  });
});
