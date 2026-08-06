const getOrdinalNumber = require("./get-ordinal-number");

test("should append 'st' for numbers where (num % 10 === 1) and (num % 100 !== 11)", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

test("should append 'nd' for numbers where (num % 10 === 2) and (num % 100 !== 12)", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(12)).toEqual("12th");
});

test("should append 'rd' for numbers where (num % 10 === 3) and (num % 100 !== 13)", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

test("should append 'th' for numbers where (num % 10 === 0, 4-9) or (num % 100 === 11, 12, 13)", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(20)).toEqual("20th");
});
