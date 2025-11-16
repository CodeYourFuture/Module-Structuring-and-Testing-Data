const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

// Case 1: Numbers ending in 1 except 11

test("should return 'st' for numbers ending in 1 except 11", () => {
  const values = [1, 21, 31, 101, 1001];
  values.forEach(num => {
  expect(getOrdinalNumber(num)).toEqual(`${num}st`);
  });
});

// Case 2: Numbers ending in 2 except 12

test("should return 'nd' for numbers ending in 2 except 12", () => {
  const values = [2, 22, 32, 102, 1002];
  values.forEach(num => {
  expect(getOrdinalNumber(num)).toEqual(`${num}nd`);
  });
});

// Case 3: Numbers ending in 3 except 13

test("should return 'rd' for numbers ending in 3 except 13", () => {
  const values = [3, 23, 33, 103, 1003];
  values.forEach(num => {
  expect(getOrdinalNumber(num)).toEqual(`${num}rd`);
  });
});

// Case 4: Exceptions 11, 12 & 13 

test("should return 'th' for 11, 12, 13 regardless of other digits", () => {
  const values = [11, 12, 13, 111, 212, 513];
  values.forEach(num => {
  expect(getOrdinalNumber(num)).toEqual(`${num}th`);
  });
});

// Case 5: Numbers ending in 0 and (4-9)

test("should return 'th' for numbers ending in 0 or 4–9", () => {
  const values = [4, 5, 6, 7, 8, 9, 10, 20, 25, 100, 104, 1009];
  values.forEach(num => {
  expect(getOrdinalNumber(num)).toEqual(`${num}th`);
  });
});

// Case 6: Invalid cases / inputs 
test("should throw error for zero, negative or non-integer inputs", () => {
  expect(() => getOrdinalNumber(0)).toThrow("Only positive integers are allowed");
  expect(() => getOrdinalNumber(-5)).toThrow("Only positive integers are allowed");
  expect(() => getOrdinalNumber(2.5)).toThrow("Only positive integers are allowed");
});

// Added possible and invalid cases and tested using npx jest 
// Modified the test into groups  