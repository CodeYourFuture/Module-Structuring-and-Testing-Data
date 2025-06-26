function repeat(str, count) {
  if (count < 0) {
    throw new Error("count must be a non-negative integer");
  }

  if (count === 0) {
    return "";
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}
console.log(repeat("hi", -1));
module.exports = repeat;
