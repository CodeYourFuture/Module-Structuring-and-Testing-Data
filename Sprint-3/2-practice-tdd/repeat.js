function repeat(str, count) {
  let newStr = "";

  if (count === 0) {
    return newStr;
  } else if (count === 1) {
    return str;
  } else if (count > 1) {
    for (let i = 0; i < count; i++) {
      newStr += str;
    }
    return newStr;
  } else {
    throw new Error(
      "Error invalid count used, please use integers from 0 upwards."
    );
    //return "Error invalid count used, please use integers from 0 upwards.";
  }
}

module.exports = repeat;
