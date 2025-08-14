function repeat(str, count) {
  let result = "";
  if (count < 0) {
    throw new Error("Invalid count");
  }
  for (i = 0; i < count; i++) {
    result += str;
  }
  return result;
  //return str.repeat(count);
}

module.exports = repeat;
