
function creditCardValidator(cardNum){
    // Make sure input is string 
    const numString = String(cardNum);
    //Here we check invalid cases based on the rules. Each one check one of the rules that makes
    // invalid credit card number and return true. 

    const isNotNumber = !/^\d+$/.test(numString); //check string has invalid character
    
    const isNot16Digits = (numString.length !== 16); // check string length is not 16
    
    const isNotUnique = (new Set(numString)).size < 2; // check if there are not at least two different digits
    
    //check last digit is not even
    const lastDigitIsNotEven = ((Number(numString[numString.length - 1])) % 2 !== 0);
    
    //check sum of digits are not greater than 16
    const sumDigitsIsNotValid = ([...numString].reduce((sum, digit) => sum + Number(digit), 0)) <= 16;

    //At the end with if statement check if only one
    // rules check is true (means invalid string) total result will be false (means card number
    // is not valid) 

    // Based on the review I simplified this code with one return by removing if statement
    // and put it directly in return 

    return !(isNot16Digits || isNotNumber || isNotUnique || lastDigitIsNotEven || sumDigitsIsNotValid);
    //     return false;
    // }
    // if none of the rules is not true and means card number pass all the rules so it return true
    // that it means valid card number
    // else
    //     return true;
}


console.log(creditCardValidator("9999777788880000")); // true
console.log(creditCardValidator("6666666666661666")); // true
console.log(creditCardValidator("a92332119c011112")); // false (invalid characters)
console.log(creditCardValidator("4444444444444444")); // false (only one type of number)
console.log(creditCardValidator("1111111111111110")); // false (sum less than 16)
console.log(creditCardValidator("6666666666666661")); // false (odd final number)