// Explanation: This file contains a function `getLargest` that takes three numbers as input and returns the largest of the three. The function uses conditional statements to compare the numbers and determine which one is the largest. The test case at the bottom checks if the function correctly identifies the largest number in various scenarios, including when all numbers are the same.

function getLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

test("returns the largest of three numbers", () => {
  expect(getLargest(1, 2, 3)).toEqual(3);
  expect(getLargest(10, 5, 7)).toEqual(10);
  expect(getLargest(4, 9, 6)).toEqual(9);
  expect(getLargest(5, 5, 5)).toEqual(5);
});