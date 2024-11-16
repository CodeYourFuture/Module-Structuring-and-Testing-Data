function ordinal(num) {
    // Check for the special cases (11th, 12th, 13th)
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num.toString() + "th";
    } else if (num % 10 === 1) {
        return num.toString() + "st";
    } else if (num % 10 === 2) {
        return num.toString() + "nd";
    } else if (num % 10 === 3) {
        return num.toString() + "rd";
    } else {
        return num.toString() + "th";
    }
}
export default ordinal;
