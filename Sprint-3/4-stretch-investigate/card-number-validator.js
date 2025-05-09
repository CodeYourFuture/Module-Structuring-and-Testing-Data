
function cardValidator(num) {
    let numString = String(num);  // Convert the number to a string
    let count = 0 
    if (numString.length === 16 && !isNaN(numString)) {
        let numArray = numString.split('').map(Number);  // Convert each character to a number

        if (numArray[numArray.length - 1] % 2 !== 0) {
            return "invalid"  // If the last digit is not even, return invalid.
        }
        
        // Calculate the sum of all digits
        count = numArray.reduce(sum);  // Sum all digits
        function sum(acc , cur){
            return acc + cur
        }

        if (count <= 16) {
            return "invalid"  // If the sum is 16 or less, return invalid.
        }

        let hasDifferentDigits = false;         // There must be at least two different digits
        for (let i = 1; i < numArray.length; i++) {
            if (numArray[i] !== numArray[0]) {
                hasDifferentDigits = true
                break  // We found a different digit, no need to continue checking.
            }
        }
        
        if (!hasDifferentDigits) {
            return "invalid"  // If all digits are the same, return invalid.
        }

        return "valid"  // If all rules are passed, return valid.
    } else {
        return "invalid"
    }
}



console.log(cardValidator(9999777788880000));
console.log(cardValidator(4444444444444444));
console.log(cardValidator(1111111111111110));
console.log(cardValidator(6666666666666661));