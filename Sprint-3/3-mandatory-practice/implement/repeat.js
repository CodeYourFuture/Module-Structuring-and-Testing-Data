function repeat(str, count) {
  if (count <= 0) {
    return "";
  }
  return str.repeat(count);
}

console.log(repeat("My Name ", 5));
console.log(repeat("My Name ", 0));
console.log(repeat("My Name ", -5));

module.exports = repeat;
