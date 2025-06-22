function repeat(str, count) {
  let result = ""; // initialize an empty str

  for (i = 0; i < count; i++) {
    result = result + str; // repeat the string
  }

  if (count < 0) {
    result = "Negative counts are not valid."; // catch negative numbers
  }

  return result;
}

module.exports = repeat;
