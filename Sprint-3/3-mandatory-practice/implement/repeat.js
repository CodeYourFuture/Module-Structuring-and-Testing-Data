function repeat(str, count) {
  if (count < 0) {
    throw new Error("Negative numbers are not valid!");
  } else {
    return str.repeat(count);
  }
}

// console.log(repeat("", -1));
module.exports = repeat;
