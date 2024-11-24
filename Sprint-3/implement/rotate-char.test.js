const rotateChar = require("./rotate-char"); // Use 'rotateCharacter' to match your function name

test("rotates lowercase letters correctly", function () {
  expect(rotateChar("a", 3)).toBe("d"); // 'a' -> 'd'
  expect(rotateChar("f", 1)).toBe("g"); // 'f' -> 'g'
  expect(rotateChar("F", 1)).toBe("G"); // 'f' -> 'g'
  expect(rotateChar("z", 1)).toBe("a"); // Wraparound: 'z' -> 'a'
});
