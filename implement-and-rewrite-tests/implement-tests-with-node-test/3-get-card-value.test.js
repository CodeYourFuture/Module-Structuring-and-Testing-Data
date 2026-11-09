import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Returns the correct value for number cards", () => {
  assert.equal(getCardValue("2♠"), 2);
  assert.equal(getCardValue("5♥"), 5);
  assert.equal(getCardValue("9♦"), 9);
  assert.equal(getCardValue("10♣"), 10);
});

test("Returns 11 for aces", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Returns 10 for face cards", () => {
  assert.equal(getCardValue("J♠"), 10);
  assert.equal(getCardValue("Q♥"), 10);
  assert.equal(getCardValue("K♦"), 10);
});

test("Accepts all four suits", () => {
  assert.equal(getCardValue("5♠"), 5);
  assert.equal(getCardValue("5♥"), 5);
  assert.equal(getCardValue("5♦"), 5);
  assert.equal(getCardValue("5♣"), 5);
});

test("Rejects invalid cards", () => {
  assert.throws(() => getCardValue("invalid"));
  assert.throws(() => getCardValue("1♠"));
  assert.throws(() => getCardValue("11♠"));
  assert.throws(() => getCardValue("5X"));
  assert.throws(() => getCardValue("♠5"));
  assert.throws(() => getCardValue("5"));
});
