function getOrdinalNumber(num) {
    let lastDigit = num % 10;
    let lastTwoDig = num % 100;
    if (lastTwoDig >= 11 && lastTwoDig <= 13) {
        return num + "th";}
    if (lastDigit == 1 ) {
        return num + "st";
    }
    if (lastDigit == 2) {
        return num + "nd";
    }
    if (lastDigit == 3) {
        return num + "rd";
    }

    return num + "th";
}

console.log(getOrdinalNumber(13));
console.log(getOrdinalNumber(12));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(112));
console.log(getOrdinalNumber(113));

module.exports = getOrdinalNumber;