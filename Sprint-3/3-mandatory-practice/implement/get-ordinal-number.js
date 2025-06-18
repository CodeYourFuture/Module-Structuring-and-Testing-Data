function getOrdinalNumber(num) {
    const lastTwoNum = num % 100;
    const lastDigit = num % 10;

    if (lastTwoNum >= 11 && lastTwoNum <= 13) return `${num}th`;

    if(lastDigit === 1) return `${num}st`;
    if(lastDigit === 2) return `${num}nd`;
    if(lastDigit === 3) return `${num}rd`;

    return `${num}th`;
}

module.exports = getOrdinalNumber;