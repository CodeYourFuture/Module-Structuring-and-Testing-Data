function repeat(str, count) {
  let result = ""; // initialize an empty str

  for (i = 0; i < count; i++) {
    result = result + str; // repeat the string
  }

  if (count < 0) {
    throw new Error("Negative count is invalid."); // catch negative numbers
  } else {
    return result;
  }
}

module.exports = repeat;
