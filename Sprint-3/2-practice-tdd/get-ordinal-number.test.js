// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"
test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: Identify ordinal numbers ending in 1 but not 11
// When the number ends with 1 but is not 11,
// Then the function should return the correct 'st' suffix
test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
});

// Case 5: Identify ordinal numbers ending in 2 but not 12
// When the number ends with 2 but is not 12,
// Then the function should return the correct 'nd' suffix
test("should return '42nd' for 42", () => {
  expect(getOrdinalNumber(42)).toEqual("42nd");
});

// Case 6: Identify ordinal numbers ending in 3 but not 13
// When the number ends with 3 but is not 13,
// Then the function should return the correct 'rd' suffix
test("should return '53rd' for 53", () => {
  expect(getOrdinalNumber(53)).toEqual("53rd");
});

// Case 7: Identify teen exceptions 11, 12, 13
// When the number is 11, 12, or 13,
// Then the function should return the correct 'th' suffix
test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});
test("should return '12th' for 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
});
test("should return '13th' for 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 8: Identify general 'th' endings
// When the number does not end in 1, 2, or 3 (except teens),
// Then the function should return the 'th' suffix
test("should return '20th' for 20", () => {
  expect(getOrdinalNumber(20)).toEqual("20th");
});
test("should return '100th' for 100", () => {
  expect(getOrdinalNumber(100)).toEqual("100th");
});
