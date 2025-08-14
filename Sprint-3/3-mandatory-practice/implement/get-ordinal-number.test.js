const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify numbers that end with 1 but are not 11

test.each([1, 21, 31])("should return '%ist' for %i", (num) => { 
    expect(getOrdinalNumber(num)).toEqual(`${num}st`);
    });

// Case 2: identify the ordinal numbers that end with 2 but are not 12 

test.each([2, 22, 32])("should return '%ind' for %i", (num) => {
  expect(getOrdinalNumber(num)).toEqual(`${num}nd`);
    });

// Case 3: identify the ordinal numbers that end with 3 but not 13
test.each([3, 23, 33])("should return '%ird' for %i", (num) => {
  expect(getOrdinalNumber(num)).toEqual(`${num}rd`);
    });

// Case 4: everything else with th
test.each([4, 5, 6, 10, 14, 20, 40])("returns '%ith' for %i", (num) => {
  expect(getOrdinalNumber(num)).toEqual(`${num}th`);
});

// Case 5: 11th 12th 13th (special teen case)
test.each([11, 12, 13])("should return '%ith' for %i", (num) => {
  expect(getOrdinalNumber(num)).toEqual(`${num}th`);
});
