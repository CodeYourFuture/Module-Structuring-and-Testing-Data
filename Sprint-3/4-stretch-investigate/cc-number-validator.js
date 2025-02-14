function crCardNumberValidator(cardNumber){
    if (typeof cardNumber === "number"){
        cardNumber = cardNumber.toString();
    } //here i check for data type if it is number i changed it to string not to loss zero at the begining of the password since a number 
      //starting with zero is treated without the zero. then now i will check the type if it is string
    if(typeof cardNumber !==="string"){
        return false;
    }
    if(cardNumber.length !==16){ //i am checking if my credit card length is 16 if not return false.
        return false;   
    }
    //here i check if cardNumber isnot a number and if its content is empty return false.
    if (isNaN(Number(cardNumber)) || cardNumber.trim() === "") return false;
    
    let sum = 0 ;
    let uniqueDigits= new Set();  //i use this to create a new set of unique digits
    let lastDigit= Number(cardNumber[cardNumber.length-1]);  //to get the last digit
    //for all characters of cardNumber i add each digits to the sum and i added my digits to my new set uniqueDigits.
    for(let char of cardNumber){
        let digit = Number(char);
        sum += digit;  
        uniqueDigits.add(digit);
    } 
    if(uniqueDigits.size < 2){
        return false;
    }//this checks if there are at least 2 different digits
    if(lastDigit % 2 !== 0){
        return false;
    }
    if (sum<=16){
        return false;
    }

}
// tests
// Test cases
console.log(crCardNumberValidator("9939737788480000")); //true
console.log(crCardNumberValidator("1111111111111110")); //false since sum is less than 16
console.log(crCardNumberValidator("1234567890123456")); //true 
console.log(crCardNumberValidator("3333333333333333")); //false since i provide only one unique digit