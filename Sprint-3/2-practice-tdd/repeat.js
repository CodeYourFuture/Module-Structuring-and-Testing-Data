function repeat(str, count) {
  let newStr = "";

  if (count === 0) {
    return newStr;
  } else if (count === 1) {
    return (newStr += str);
  } else if (count > 1) {
    for (let i = 0; i < count; i++) {
      newStr += str;
    }
    return newStr;
  } else {
    return "Error invalid count used, please use integers from 0 upwards.";
  }
}

module.exports = repeat;
