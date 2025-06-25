function repeat(stringOfWords, numberOfCount) {
  if (numberOfCount < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  return stringOfWords.repeat(numberOfCount);
}

module.exports = repeat;
