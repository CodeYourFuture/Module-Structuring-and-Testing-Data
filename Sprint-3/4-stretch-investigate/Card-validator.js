function isValidCreditCard(cardNumber){
   
    
    if(cardNumber.length !==16 || isNaN(cardNumber)){
        return false;
    }
    // Check if the input is exactly 16 digits and contains only numbers

    let lastDigit = Number(cardNumber[cardNumber.length - 1]); 
    if (lastDigit % 2 !== 0) {
        return false;
    }
    //  the last digit must be even.
   
    
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }
    // The test(cardNumber)  checks if cardNumber matches the pattern of exactly 16 digits.

     return true;
     // if all tests passed ,return true which is valid card number

}
console.log(isValidCreditCard("1234567899876548")); // true (valid card)
console.log(isValidCreditCard("2224446668881118")); // true (valid card)
console.log(isValidCreditCard("a92332119c011112")); // false (contains letters)
console.log(isValidCreditCard("4444444444444444")); // true
console.log(isValidCreditCard("333111111111110")); // false (sum less than 16)

      


    
