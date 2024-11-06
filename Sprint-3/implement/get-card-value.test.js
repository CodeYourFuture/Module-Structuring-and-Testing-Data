getCardValue = require("./get-card-value.js");

// Describe our test
//describe("getCardValue", () => {
// This is our actual test, but we're using `test` instead of `it`

test("tests cards", () => {
  expect(getCardValue("QB")).toEqual(10);
  expect(getCardValue("3B")).toEqual("03");
  expect(getCardValue("RB")).toEqual("Invalid Card rank");
});
//});
