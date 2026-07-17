function repeatStr(stringOfCharacters, count) {
  if (count < 0) {
    throw new Error("Invalid input: count must be a non-negative integer");
  }

  let result = "";

  for (let i = 0; i < count; i++) {
    result += stringOfCharacters;
  }

  return result;
}

module.exports = repeatStr;
