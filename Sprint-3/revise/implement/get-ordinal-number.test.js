// In this week's prep, we started implementing getOrdinalNumber
//
//const { default: test } = require("node:test");

//const { rmdir } = require("fs")

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(num) {
  let lastDigit = num % 10;
  if (lastDigit == 1) return num + "st";
  if (lastDigit == 2) return num + "nd";
  if (lastDigit == 3) return num + "rd";
  if (lastDigit >= 4 || lastDigit == 0) return num + "th";
}
//console.log(getOrdinalNumber(1113));
test("should return 1st", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
test("should return 1001st", () => {
  expect(getOrdinalNumber(1001)).toEqual("1001st");
});
test("should return 12551st", () => {
  expect(getOrdinalNumber(12551)).toEqual("12551st");
});

test("should return 1252nd", () => {
  expect(getOrdinalNumber(1252)).toEqual("1252nd");
});
test("should return 2nd", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});
test("should return 1st", () => {
  expect(getOrdinalNumber(12551)).toEqual("12551st");
});

test("should return 10th", () => {
  expect(getOrdinalNumber(10)).toEqual("10th");
});
test("should return 1006th", () => {
  expect(getOrdinalNumber(1006)).toEqual("1006th");
});
test("should return 269th", () => {
  expect(getOrdinalNumber(269)).toEqual("269th");
});
