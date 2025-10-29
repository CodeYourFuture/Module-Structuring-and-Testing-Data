// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correct value for number cards (2–10)", () => {
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("7♣")).toEqual(7);
  expect(getCardValue("10♦")).toEqual(10);
  expect(getCardValue("5♠")).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
  expect(getCardValue("J♣")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace cards", () => {
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
  expect(getCardValue("A♠")).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card ranks and provide a descriptive message", () => {
  // These specific ranks are all invalid
  expect(() => getCardValue("Z♠")).toThrow(
    'Invalid or unrecognized card rank: "Z"'
  );
  expect(() => getCardValue("1♥")).toThrow(
    'Invalid or unrecognized card rank: "1"'
  );
  expect(() => getCardValue("11♦")).toThrow(
    'Invalid or unrecognized card rank: "11"'
  );
  expect(() => getCardValue("X♣")).toThrow(
    'Invalid or unrecognized card rank: "X"'
  );

  // These should throw because they result in an empty or whitespace rank
  expect(() => getCardValue(" ♣")).toThrow(
    'Invalid or unrecognized card rank: " "'
  );
  expect(() => getCardValue("♣")).toThrow(
    'Invalid or unrecognized card rank: ""'
  );
  /*
// (Optional) Stretch case — outside normal input expectations
// The function isn't required to handle this, but it tests how the function fails gracefully or otherwise.
  expect(() => getCardValue("")).toThrow(
    'Invalid or unrecognized card rank: ""'
  );
  */
});
