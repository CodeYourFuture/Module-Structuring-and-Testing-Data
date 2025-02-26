function getOrdinalNumber(num) {
    const suffixes = ["th", "st", "nd", "rd"]; 
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return num + "th";
    } 
    return num + (suffixes[lastDigit] || "th");
}

module.exports = getOrdinalNumber;