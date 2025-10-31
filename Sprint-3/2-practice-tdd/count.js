function countChar(stringOfCharacters, findCharacter) {
  let counter = 0;
  let index = stringOfCharacters.indexOf(findCharacter);
  while (index !== -1) {
    counter++;

    index = stringOfCharacters.indexOf(findCharacter, index + 1);
  }
  return counter;
}

module.exports = countChar;
function assertFunction(currentOutput, targetOutput) {
  console.assert(
    currentOutput === targetOutput,
    `expect ${currentOutput} to equal ${targetOutput}`
  );
}
