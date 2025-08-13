// This function currently only handles the case for 1st.
// You can expand it to handle other numbers as needed.
// For example, you might want to add cases for 2nd, 3rd, etc., and handle exceptions for numbers like
// 11th, 12th, and 13th which have special rules in English.
// To do this, you can use a switch statement or if-else conditions to check the value of num and return the appropriate ordinal string.
// Example of handling more cases:

function getOrdinalNumber(n) {
   const suffixes = ["th", "st", "nd", "rd"];
    const v = n % 100;
    
    if (v >= 11 && v <= 13) {
        return n + "th";
    }

    const lastDigit = n % 10;
    const suffix = suffixes[lastDigit] || "th";

    return n + suffix;
}
module.exports = getOrdinalNumber;
