const countChar = require("./countChar");

test("should return 0 when character does not exist in the string", () => {
  const str = "hello world";
  const char = "x";

  const count = countChar(str, char);

  expect(count).toEqual(0);
});
