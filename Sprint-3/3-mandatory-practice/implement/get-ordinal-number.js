function getOrdinalNumber(num) {

    /* 
    numAsStr = toString(num)
    lastDigit = numAsStr.charAt(last.Digit.length-1)
    
    if (lastDigit === "1"):
        if (number is 11):
            return += th
        return += st
        
    if (lastDigit === "2"):
        return += nd

    if (number ends in 3):
        return += rd

    if (number ends in 4,5,6,7,8,9,0):
        return += th
    */


    if (num == 11) {
    result = `${num}th`;}

    else {
    result = `${num}st`;
    }

    return result;
}


module.exports = getOrdinalNumber;