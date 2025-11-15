const getOrdinalNumber = require("./get-ordinal-number");

// Category 1: Numbers ending in 11, 12, 13 → always "th"
test("appends 'th' to numbers ending in 11, 12, or 13", () => {
  const numbers = [11, 12, 13, 111, 1012, 1313];
  numbers.forEach(num => {
    expect(getOrdinalNumber(num)).toEqual(`${num}th`);
  });
});

// Category 2: Numbers ending in 1 → "st" (except those ending in 11)
test("appends 'st' to numbers ending in 1 except those ending in 11", () => {
  const numbers = [1, 21, 101, 1001];
  numbers.forEach(num => {
    expect(getOrdinalNumber(num)).toEqual(`${num}st`);
  });
});

// Category 3: Numbers ending in 2 → "nd" (except those ending in 12)
test("appends 'nd' to numbers ending in 2 except those ending in 12", () => {
  const numbers = [2, 22, 102, 202];
  numbers.forEach(num => {
    expect(getOrdinalNumber(num)).toEqual(`${num}nd`);
  });
});

// Category 4: Numbers ending in 3 → "rd" (except those ending in 13)
test("appends 'rd' to numbers ending in 3 except those ending in 13", () => {
  const numbers = [3, 23, 103, 1003];
  numbers.forEach(num => {
    expect(getOrdinalNumber(num)).toEqual(`${num}rd`);
  });
});

// Category 5: All other numbers → "th"
test("appends 'th' to numbers that don't meet special suffix rules", () => {
  const numbers = [4, 5, 6, 9, 20, 100, 1004, 1009];
  numbers.forEach(num => {
    expect(getOrdinalNumber(num)).toEqual(`${num}th`);
  });
});

// Error handling - Non-integers
test("throws an error when number is not an integer", () => {
  const invalidInputs = [1.5, "3", null, undefined, {}, [], NaN];

  invalidInputs.forEach(input => {
    expect(() => getOrdinalNumber(input)).toThrow("Input must be an integer");
  });
});

// Error handling - Negative values
test("throws an error when number is negative", () => {
  expect(() => getOrdinalNumber(-1)).toThrow("Input must be a non-negative integer");
});
