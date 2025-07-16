function repeat(str, count) {
  if (count < 0) {
    return "Negative numbers are not accepted";
  }
  return str.repeat(count);
}

console.log(repeat("hello", -100));
console.log(repeat("hell0", 0));
module.exports = repeat;
