function countChar(stringOfCharacters, findCharacter) {
  return [...stringOfCharacters].reduce(
    (acc, curr) => acc + (curr === findCharacter ? 1 : 0),
    0
  );
}

module.exports = countChar;
