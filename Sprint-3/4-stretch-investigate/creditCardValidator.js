   //Here are the rules for a valid number:

    //Number must be 16 digits, all of them must be numbers.
    // You must have at least two different digits represented (all of the digits cannot be the same).
    // The final digit must be even.
    // The sum of all the digits must be greater than 16.

// check cardNumber must be 16 digits and all of them must be numbers.

function validateCardNumber(cardNumber){
    if(cardNumber.length !==16 || !/^\d+$/ .test(cardNumber)){
        return false;
    }
// The final digit must be even.    
    let lastDigit = parseInt(cardNumber[cardNumber.length-1], 10);
    if(lastDigit % 2 !==0){
        return false;
    }
// The sum of all the digits must be greater than 16.
    let digitSum = 0;
    for(let i=0; i< cardNumber.length; i++){
        digitSum += parseInt(cardNumber[i]);
    }
    
//  must have at least two different digits in cardNumber
    if (cardNumber.split('').every(digit => digit === cardNumber[0])) {
       return false;  // Invalid if all digits are the same
    }

    return digitSum > 16;// return false
    
   

}
module.exports = validateCardNumber;
