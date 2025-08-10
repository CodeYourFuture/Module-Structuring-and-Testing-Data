function getOrdinalNumber(num) {
    // need to handle 21st, 22nd, 23rd, and all other numbers
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }
    const lastDigit = num % 10;

    if (lastDigit === 1) return num + "st";
    if (lastDigit === 2) return num + "nd";
    if (lastDigit === 3) return num + "rd";
    return num + "th"; // handles all other cases
}

module.exports = getOrdinalNumber;
