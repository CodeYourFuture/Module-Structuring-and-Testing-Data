// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require('./get-ordinal-number');

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("converts 2 to an ordinal number", function () {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("converts 3 to an ordinal number", function () {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});
 