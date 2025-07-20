function getOrdinalNumber(n) {
  let ord = "th";

  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }

  return n + ord;
}
console.log(getOrdinalNumber(1)); // The output should be "1st"

// in this function, we got the ordinal number for 1.
// we used a simple if statement to check if the number is 1 and return "1st".

module.exports = getOrdinalNumber;
