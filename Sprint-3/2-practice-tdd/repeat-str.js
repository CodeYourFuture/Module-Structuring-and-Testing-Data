function repeatStr(n, str) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

module.exports = repeatStr;
// const repeatStr = require("./repeat-str");
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:
// test("repeats a string n times", () => {
//   expect(repeatStr(3, "hello")).toBe("hellohellohello");
// });
const repeatStr = require("./repeat-str");
test("repeats a string n times", () => {
  expect(repeatStr(3, "hello")).toBe("hellohellohello");
});
// test("repeats a different string", () => {
//   expect(repeatStr(2, "abc")).toBe("abcabc");
// });
test("repeats a different string", () => {
  expect(repeatStr(2, "abc")).toBe("abcabc");
});
// test("returns empty string when n is 0", () => {
//   expect(repeatStr(0, "hi")).toBe("");
// });
test("returns empty string when n is 0", () => {
  expect(repeatStr(0, "hi")).toBe("");
});
// test("returns empty string when n is 0", () => {
//   expect(repeatStr(0, "hi")).toBe("");
// });
test("returns empty string when n is 0", () => {
  expect(repeatStr(0, "hi")).toBe("");
});
