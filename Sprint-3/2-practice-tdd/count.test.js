test("should be case sensitive", () => {
  expect(countChar("Hello", "h")).toEqual(0);
  expect(countChar("Hello", "H")).toEqual(1);
});

test("should work with non-alphabet characters", () => {
  expect(countChar("!!??!!", "!")).toEqual(4);
  expect(countChar("123123", "1")).toEqual(2);
});