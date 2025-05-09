function getOrdinalNumber(num) {

    let numString = num.toString()
    let lastNum = numString.length >= 2 ? numString.slice(-2) : numString.slice(-1);

    if (lastNum === '11' || lastNum === '12' || lastNum === '13') {
        return `${num}th`
    } else if (numString === '23') {
        return '23rd'
    }

    if (lastNum === '1') return `${num}st`
    else if (lastNum === '2') return `${num}nd`
    else if (lastNum === '3') return `${num}rd`
    else return `${num}th`

    }

module.exports = getOrdinalNumber;
