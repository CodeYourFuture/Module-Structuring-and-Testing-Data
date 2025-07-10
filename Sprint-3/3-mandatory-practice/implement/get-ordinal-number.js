function getOrdinalNumber(num) {
 return "1st";
}
// This function currently only handles the case for 1st.
// You can expand it to handle other numbers as needed.
// For example, you might want to add cases for 2nd, 3rd, etc., and handle exceptions for numbers like
// 11th, 12th, and 13th which have special rules in English.
// To do this, you can use a switch statement or if-else conditions to check the value of num and return the appropriate ordinal string.
// Example of handling more cases:

function getOrdinalNumber(num) {

module.exports = getOrdinalNumber;
    if (num === 1) {
        return "1st";
    } else if (num === 2) {
        return "2nd";
    } else if (num === 3) {
        return "3rd";
    } else if (num % 10 === 1 && num % 100 !== 11) {
        return num + "st";
    } else if (num % 10 === 2 && num % 100 !== 12) {
        return num + "nd";
    } else if (num % 10 === 3 && num % 100 !== 13) {
        return num + "rd";
    } else {
        return num + "th";
    }
}