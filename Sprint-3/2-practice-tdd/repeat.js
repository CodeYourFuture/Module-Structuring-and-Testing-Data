function repeat() {
  return "hellohellohello";
}

module.exports = repeat;

test("should repeat the given word three times", () => {
  expect(repeat("hi", 3)).toBe("hihihi");
});
