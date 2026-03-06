function countChar(stringOfCharacters, findCharacter) {
  const metaCharRegex = /[.^$*+?{}\[\]\\|()]/g;
  const safeChar = findCharacter.replace(metaCharRegex, `\\$&`);
  const charRegex = new RegExp(safeChar, "g");
  const charArr = [...stringOfCharacters.matchAll(charRegex)];
  return charArr.length;
}

module.exports = countChar;
