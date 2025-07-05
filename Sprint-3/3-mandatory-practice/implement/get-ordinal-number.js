function getOrdinalNumber(num) {
    // ordinal numbers abbreviations based on last digit most of the times
    let lastDigit = num % 10;
    let uniqueAbbreviationsDigits = [1, 2, 3];
    // there is 3 exceptions to this
    let lastTwoDigits = num % 100;
    let exceptions = [11, 12, 13];

    if (exceptions.includes(lastTwoDigits) || !uniqueAbbreviationsDigits.includes(lastDigit)) {
        return num + 'th';
    } else if (lastDigit == 1) {
        return num + 'st';
    } else if (lastDigit == 2) {
        return num + 'nd';
    } else if (lastDigit == 3) {
        return num + 'rd';
    }
}

module.exports = getOrdinalNumber;