const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st"); // test to handle 1st case
});

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd"); // test to handle case like 1, 11, 111 
  expect(getOrdinalNumber(22)).toEqual("22nd");  
  expect(getOrdinalNumber(992)).toEqual("992nd");
});
test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th"); //test to handle 11th special case
});

test("should return '12th' for 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th"); // test to handle 12th special case
});

test("should return '122nd' for 122", () => {
  expect(getOrdinalNumber(122)).toEqual("122nd"); // test to handle case like 1, 11, 111
});

test("should return '123rd' for 123", () => {
  expect(getOrdinalNumber(123)).toEqual("123rd");
});
test("should return '199th' for 199", () => {
    expect(getOrdinalNumber(199)).toEqual("199th");
  });