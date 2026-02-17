// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");

// Scenario 1: Multiple Occurrences
test("should count multiple occurrences of a character", () => {
  expect(countChar("aaaaa", "a")).toEqual(5);
  expect(countChar("sea saw", "s")).toEqual(2);
  expect(countChar("Arrested Development", "d")).toEqual(2);
  expect(countChar("* Star * TV *", "*")).toEqual(3);
});

// Scenario 2: Single Occurrence
test("should count single occurrence of a character", () => {
  expect(countChar("a", "a")).toEqual(1);
  expect(countChar("Star Light", "i")).toEqual(1);
  expect(countChar("!@#$%^&*()", "#")).toEqual(1);
  expect(countChar("onomatopoeia", "t")).toEqual(1);
});

// Scenario 3: No Occurrence
test("should count single occurrence of a character", () => {
  expect(countChar("The Rookie", "S")).toEqual(0);
  expect(countChar("Angela Bassett", "r")).toEqual(0);
  expect(countChar("Angela Bassett", "r")).toEqual(0);
  expect(countChar("Better Off Ted", "9")).toEqual(0);
});

// Scenario 4: Invalid Entries
test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar("Courage, the Cowardly Dog", "dog");
  }).toThrow();
});

test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar("Sheep in the Big City", 1);
  }).toThrow();
});

test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar(-205, "a");
  }).toThrow();
});

test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar(-205, 55.5);
  }).toThrow();
});

test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar(true, "f");
  }).toThrow();
});

test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar(undefined, "f");
  }).toThrow();
});

test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar(null, true);
  }).toThrow();
});

test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar(false, true);
  }).toThrow();
});

test(`Should throw an error when given an invalid input`, () => {
  expect(() => {
    countChar([false], {});
  }).toThrow();
});
