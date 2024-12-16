// In this week's prep, we started implementing getOrdinalNumber

//Continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require('./get-ordinal-number');

test("Expect 'st' as suffix when the last digit is 1 but the last two digits are not 11, 12, or 13", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(21)).toBe("21st");
});

test("Expect 'nd' as suffix when the last digit is 2 but the last two digits are not 12", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(22)).toBe("22nd");   
});

test("Expect 'rd' as suffix when the last digit is 3 but the last two digits are not 13", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(23)).toBe("23rd");
});

test("Expect 'th' as suffix for all other cases", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(11)).toBe("11th");
});
