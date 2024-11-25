function getOrdinalNumber(num) {

    let ordinal = "";
    if (num > 0) {
        let StringNum = num.toString();

        if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
            ordinal = "th";
        }
        else if (Number(StringNum[StringNum.length - 1]) === 1 || Number(num) === 1) {
            ordinal = "st";
        }
        else if (Number(StringNum[StringNum.length - 1]) === 2) {
            ordinal = "nd";
        }
        else if (Number(StringNum[StringNum.length - 1]) === 3) {
            ordinal = "rd";
        }
        else {
            ordinal = "th";
        }
    }
    return `${num}${ordinal}`

}

// console.log(getOrdinalNumber(1));
// console.log(getOrdinalNumber(12));
// console.log(getOrdinalNumber(21));
// console.log(getOrdinalNumber(33));
// console.log(getOrdinalNumber(22));
// console.log(getOrdinalNumber(19));

module.exports = getOrdinalNumber;