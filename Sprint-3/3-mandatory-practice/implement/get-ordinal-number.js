function getOrdinalNumber(num) {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${num}th`;
    }

    switch(lastDigit) {
        case 1:
            return `${num}st`;
            break;
        case 2:
            return `${num}nd`;
            break;
        case 3:
            return `${num}rd`;
            break;
        default:
            return `${num}th`;
    }


}

module.exports = getOrdinalNumber;