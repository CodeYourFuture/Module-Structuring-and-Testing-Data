const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
<<<<<<< HEAD:Sprint-3/3-mandatory-practice/implement/get-ordinal-number.test.js
    expect(getOrdinalNumber(1)).toEqual("1st");
    });

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});

test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

=======
  expect(getOrdinalNumber(1)).toEqual("1st");
});
>>>>>>> 8f3d6cf2d1733da02a010f1a16c46b8b5ab4c491:Sprint-3/2-practice-tdd/get-ordinal-number.test.js
