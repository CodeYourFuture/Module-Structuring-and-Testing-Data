const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback


// Category 1: Numbers ending in 1 (but not 11)
test("appends 'st' to numbers ending in 1 (except 11)", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(101)).toBe("101st");
});

// Category 2: Numbers ending in 2 (but not 12)
test("appends 'nd' to numbers ending in 2 (except 12)", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(132)).toBe("132nd");
});

// Category 3: Numbers ending in 3 (but not 13)
test("appends 'rd' to numbers ending in 3 (except 13)", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(23)).toBe("23rd");
  expect(getOrdinalNumber(103)).toBe("103rd");
});

// Category 4: Numbers ending in 11, 12, 13 (special case)
test("appends 'th' to numbers ending in 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(13)).toBe("13th");
  expect(getOrdinalNumber(112)).toBe("112th");
});

// Category 5: Numbers ending in 0 or 4–9 (excluding 11–13)
test("appends 'th' to numbers ending in 0 or 4–9, except for 11–13", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(9)).toBe("9th");
  expect(getOrdinalNumber(100)).toBe("100th");
  expect(getOrdinalNumber(111)).toBe("111th"); 
});
