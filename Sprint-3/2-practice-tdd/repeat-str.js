function repeatStr(str, count) {
  // check if "count" is a negative number if so will throw new error
  if (count < 0) {
    throw new error("Count must be a positive number");

    //check if the is equal to zero
    if (count === 0){
      return ""; // returns empty string if count is equal to zero
    }
      //check if the count is equals 1.
  if (count === 1) {
    //returns just the string as its not needed to be repeated
    return str;
  }
  return str.repeat(count); // if the count is above two it repeat "count" number of times.
}
}

module.exports = repeatStr;
