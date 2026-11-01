import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Invalid suit: "d"/,
    "Expected clear error"
  );
});

test("return 11 for an ace in every suit", () => {
  const suits = ["♠", "♥", "♦", "♣"];

  for (const suit of suits) {
    assert.equal(getCardValue(`A${suit}`), 11);
  }
});

test("returns 10 for face cards in every suit", () => {
  const faceCards = ["J", "Q", "K"];
  const suits = ["♠", "♥", "♦", "♣"];

  for (const rank of faceCards) {
    for (const suit of suits) {
      assert.equal(getCardValue(`${rank}${suit}`), 10);
    }
  }
});

test("returns the correct value for number cards", () => {
  const numberCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

  for (const rank of numberCards) {
    assert.equal(getCardValue(`${rank}♣`), Number(rank));
  }
});

test("throws an error for an invalid suit", () => {
  assert.throws(() => getCardValue("9X"));
});

test("throws an error for an invalid rank", () => {
  assert.throws(() => getCardValue("1♣"));
});
