function getOrdinalNumber(num) {
    let oneDigit = num % 10;
    let twoDigit = num % 100;
    if (twoDigit >= 11 && twoDigit <= 13 ) return `${num}th`;
    else if (oneDigit == 1) return `${num}st`;
    else if (oneDigit == 2) return `${num}nd`;
    else if (oneDigit == 3) return `${num}rd`;
    else return `${num}th`;
}

module.exports = getOrdinalNumber;