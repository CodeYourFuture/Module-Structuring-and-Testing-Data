// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");



// TODO: Write tests in Jest syntax to cover all possible outcomes.



// Case 1: Ace (A)
test("should return 11 for any ace (all suits)", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});



// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards



// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// [https://jestjs.io/docs/expect#tothrowerror](https://jestjs.io/docs/expect#tothrowerror)



// Number Cards (2–10)
test("should return the numeric value of number cards (2-10)", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("10♥")).toEqual(10);
  // Loop to verify all values 2–10 across one suit
  for (let n = 2; n <= 10; n++) {
    expect(getCardValue(`${n}♠`)).toEqual(n);
  }
});



// Face Cards (J, Q, K)
test("should return 10 for all face cards (J, Q, K)", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});



// Invalid Cards
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("Z♠")).toThrow();
  expect(() => getCardValue("")).toThrow();
  expect(() => getCardValue(null)).toThrow();
});

