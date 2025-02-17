function getOrdinalNumber(num) {
    if (num % 10 === 1)return `${num}st`
    if (num % 10 === 2)return `${num}nd`
    if (num % 10 === 3 && num !== 13)return `${num}rd`
    else return `${num}th`
 
}

module.exports = getOrdinalNumber;