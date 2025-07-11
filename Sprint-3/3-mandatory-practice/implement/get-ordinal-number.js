function getOrdinalNumber(num) {
  if (num === 1) {
    return "1st";
  }
}
console.log(getOrdinalNumber(1)); // The output should be "1st"

// in this function, we got the ordinal number for 1.
// we used a simple if statement to check if the number is 1 and return "1st".

module.exports = getOrdinalNumber;
