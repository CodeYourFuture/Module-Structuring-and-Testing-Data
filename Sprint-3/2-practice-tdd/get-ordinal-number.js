function getOrdinalNumber(num) {
    const lastTwoDigits = num % 100;

    // Handle special cases: 11th, 12th, 13th
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${num}th`;
    }

    // Normal rules
    if (lastDigit === 1) return `${num}st`;
    if (lastDigit === 2) return `${num}nd`;
    if (lastDigit === 3) return `${num}rd`;

    return `${num}th`;
}

module.exports = getOrdinalNumber;
