function getOrdinalNumber(number) {
    const remainder10 = number % 10;
    const remainder100 = number % 100;

    if (remainder100 >= 11 && remainder100 <= 13) {
        return `${number}th`;
    }

    switch (remainder10) {
        case 1:
            return `${number}st`;
        case 2:
            return `${number}nd`;
        case 3:
            return `${number}rd`;
        default:
            return `${number}th`;
    }
}
module.exports = getOrdinalNumber