const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
  expect(getOrdinalNumber(-171)).toEqual("-171st");
});

// Case 2: Special case for number 11)
// When the number is 11 or the numbers ends with 11,
// Then the function should return a string by appending "th" to the number.
test("should append 'th' for number 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(12211)).toEqual("12211th");
  expect(getOrdinalNumber(98011)).toEqual("98011th");
  expect(getOrdinalNumber(-87611)).toEqual("-87611th");
});

// Case 3: Numbers ending with 2
// When the number is ending with 2,
// Then the function should return a string by appending "nd" to the number.
test("should append 'st' for numbers ending with 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(152)).toEqual("152nd");
  expect(getOrdinalNumber(-82)).toEqual("-82nd");
});


// Case 4: Numbers ending with 3
// When the number is ending with 3,
// Then the function should return a string by appending "rd" to the number.
test("should append 'st' for numbers ending with 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(183)).toEqual("183rd");
    expect(getOrdinalNumber(-903)).toEqual("-903rd");
});

// Case 5: Numbers not ending 1, 2 and 3 except 11
// When the number is not ending with 1, 2 and 3 except 11,
// Then the function should return a string by appending "th" to the number.
test("should append 'th' for numbers not ending with 1, 2 and 3 except those ending with 11", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(0)).toEqual("0th");
  expect(getOrdinalNumber(125)).toEqual("125th");
  expect(getOrdinalNumber(1000)).toEqual("1000th");
  expect(getOrdinalNumber(87939)).toEqual("87939th");
  expect(getOrdinalNumber(-780987)).toEqual("-780987th");

});

