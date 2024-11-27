function creditCardValidator(cardNum){
    const numStr = cardNum.toString();
    const uniqueDigits = new Set(numStr); // checks for duplicates 
    const lastDigit = numStr[numStr.length - 1];
    const digitSum = numStr.split("").reduce((sum, digit) => sum + Number(digit), 0); // turns the string into numbers and sums the digits

    return (
        numStr.length === 16 &&
        /^[0-9]+$/.test(numStr) &&
        uniqueDigits.size >=2 &&
        "02468".includes(lastDigit) && // checks if the last digit is even
        digitSum > 16
    );
}

module.exports = creditCardValidator;

console.log(creditCardValidator("1243578569873476"));