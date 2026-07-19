function getOrdinalNumber(num) {
    const numberStr1 = String(num).slice(-1)
    const numberStr2 = String(num).slice(-2)

    let number1 = Number(numberStr1)
    let number2 = Number(numberStr2)

    if (number2 === 11 || number2 === 12 || number2 === 13) {
        return `${num}th`
    }
    else {

        switch (number1) {
            case 1:
                return`${num}st`
                break;
            case 2:
                return `${num}nd`
                break;
            case 3:
                return `${num}rd`
                break;
            default:
                return`${num}th`;
        }
    }

}


module.exports = getOrdinalNumber;
