function getOrdinalNumber(num) {
    //function will add the correct suffix to the appropriate number with certain conditions
    let ordinal = "";
    if (num > 0) {
        let stringNum = num.toString();
        //Have to account for 11-19 which end with 'th'
        if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
            ordinal = "th";
        }
        else if (Number(stringNum[stringNum.length - 1]) === 1) {
            ordinal = "st";
        }
        else if (Number(stringNum[stringNum.length - 1]) === 2) {
            ordinal = "nd";
        }
        else if (Number(stringNum[stringNum.length - 1]) === 3) {
            ordinal = "rd";
        }
        else {
            ordinal = "th";
        }
    }
    return `${num}${ordinal}`

}

console.log(getOrdinalNumber(1));
// console.log(getOrdinalNumber(12));
// console.log(getOrdinalNumber(21));
// console.log(getOrdinalNumber(33));
// console.log(getOrdinalNumber(22));
// console.log(getOrdinalNumber(19));

module.exports = getOrdinalNumber;