const countChar = require("./count");
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test("should count no occurrences of a character", () => {
  const str = "aaaaa";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count no occurrences of a character", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count minnimum occurrence of a character", () => {
  const str = "a";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should count no occurrences of a character", () => {
  const str = "b";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count occurrence of special character", () => {
  const str = "!!!!";
  const char = "!";
  const count = countChar(str, char);
  expect(count).toEqual(4);
});

test("should count character at the beggining", () => {
  const str = "cow";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should count character at the end", () => {
  const str = "apple";
  const char = "e";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should count lowercase character", () => {
  const str = "Apple";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count occurrence of spaces", () => {
  const str = "a b c";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
