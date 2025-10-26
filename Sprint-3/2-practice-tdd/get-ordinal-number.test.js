const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return 'not an integer number' for 1.5", () => {
  expect(getOrdinalNumber(1.5)).toEqual("not an integer number");
}); 

test("should return 'invalid number' for 0", () => {
  expect(getOrdinalNumber(0)).toEqual("invalid number");
});

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("should return '121st' for 121", () =>{
  expect(getOrdinalNumber(121)).toEqual("121st")
})

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});


test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("should return '33rd' for 33", () => {
  expect(getOrdinalNumber(33)).toEqual("33rd");
});

test("should return '5th' for 5", () => {
  expect(getOrdinalNumber(5)).toEqual("5th");
});

test("should return '1114th' for 1114", () => {
  expect(getOrdinalNumber(1114)).toEqual("1114th");
});

test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

test("should return '-11th' for -11", () => {
  expect(getOrdinalNumber(-11)).toEqual("-11th");
});

test("should return '112th' for 112", () => {
  expect(getOrdinalNumber(112)).toEqual("112th");
});

test("should return '11113th' for 11113", () => {
  expect(getOrdinalNumber(11113)).toEqual("11113th");
});

test("should return NaN for s", () => {
  expect(getOrdinalNumber("s")).toEqual(NaN);
});

test("should return NaN for '9'", () => {
  expect(getOrdinalNumber("9")).toEqual(NaN);
});