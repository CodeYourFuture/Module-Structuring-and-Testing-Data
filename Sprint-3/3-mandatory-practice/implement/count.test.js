function countChar(stringOfCharacters, findCharacter) {
    // Initialize a counter
    let count = 0;

    // Loop through the string
    for (let char of stringOfCharacters) {
        if (char === findCharacter) {
            count++;
        }
    }

    return count;
}

module.exports = countChar;
test("should return 0 when character does not exist in string (case-sensitive)", () => {
  const str = "Hello code your future";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});