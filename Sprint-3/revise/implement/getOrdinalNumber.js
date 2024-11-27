function getOrdinalNumber(input) {
    if(!Number.isInteger(input) || input <= 0){
        return "Invalid input";
    }

    const lastTwoDigits = input % 100;
    if(lastTwoDigits >= 11 && lastTwoDigits <= 13){
        return `${input}th`;
    }

    const lastDigit = input % 10;

    if(lastDigit === 1){
        return `${input}st`;
    }
    
    if(lastDigit === 2){
        return `${input}nd`;
    }
    
    if(lastDigit === 3){
        return `${input}rd`;
    }

    return `${input}th`
}

module.exports = getOrdinalNumber;

console.log(getOrdinalNumber(3));