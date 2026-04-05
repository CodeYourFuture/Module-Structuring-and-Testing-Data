function countChar(stringOfCharacters, findCharacter) {
  // treat undefined/null input as empty string -> no matches
  if (stringOfCharacters == null) return 0;
  
  // coerce to string safely
  const s = String(stringOfCharacters);
  const target = String(findCharacters);
  
  if (target === '') {
    // define behaviour for empty target
    return 0;
    }

  let count = 0;
  for (const ch of s) {
    if (ch === target) count++;
  }
  return count;
}


module.exports = countChar;
