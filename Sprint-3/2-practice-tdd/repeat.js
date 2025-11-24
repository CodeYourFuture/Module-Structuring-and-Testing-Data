function repeat(str, count) {
  let newStr = "";

  if (count < 0) {
    throw new Error(
      "Error invalid count used, please use integers from 0 upwards."
    );
  }

  if (count === 0) {
    return newStr;
  }
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      newStr += str;
    }
    return newStr;
  }
}

module.exports = repeat;
