function countChar(str, char) {
  if (char.length !== 1) {
    throw new Error("Second argument must be a single character");
  }

  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;