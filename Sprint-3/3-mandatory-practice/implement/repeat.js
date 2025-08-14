function repeat(str, count) {
  // Check if "count" is a negative number.
  if (count < 0) {
    // Will throw error if "count" is negative.
    throw new Error("Count must be a positive number");
  }

  // Check if the count equals 0
  if (count === 0) {
    // Returns empty string if count is equal to 0.
    return "";
  }
  //check if the count is equals 1.
  if (count === 1) {
    //returns just the string as its not needed to be repeated
    return str;
  }
  return str.repeat(count); // if the count is above two it repeat "count" number of times.
}
/* console.log(repeat("hello", 0)); // expect ""
console.log(repeat("hello", 1)); // expect string to be called
console.log(repeat("hello", 3));// expect string to be repeated 3 times.
console.log(repeat("hello", -1)); // expect string to throw error for being a negative number
*/
module.exports = repeat;