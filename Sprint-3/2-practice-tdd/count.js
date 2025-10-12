function countChar(str, char) {
  return str.split(char).length - 1;
}

module.exports = countChar;

console.log(
  countChar(
    "The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.",
    "a"
  )
);
