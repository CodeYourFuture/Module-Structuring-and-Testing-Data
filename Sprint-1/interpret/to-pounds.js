const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); //penceString.substring(0,3)===399

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");//399
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);//paddedPenceNumberString.substring(0,1)===3


const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This programming takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

 // 2.const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1);:it initializing the string from the start(index[0]) by excluding the last character therefore,the p will be excluded//399

 //3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): 
 //   padStart() Ensures the string has at least 3 digits by adding leading zeroes if necessary.
    //padStart(3, "0"): Adds "0" to the start of the string until its length is 3 so if the input was "399", it remains unchanged. If the input was "99", it would become "099".



 //4.const pounds = paddedPenceNumberString.substring(  0, paddedPenceNumberString.length - 2):it initializing the string from the start(index[0]) by excluding the last two characters//3

 //5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) .padEnd(2, "0"):two functions here 

   //the first one paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) : This calculates the starting index for the substring, which is two characters from the end of the string//99
   //the second one is padEnd(2, "0") Ensures that the extracted portion has a length of 2 by adding a trailing "0" if needed. For example  For "99",it extracts "99" and 9", it extracts "09".

 //6. console.log(`£${pounds}.${pence}`): this takes the value pounds and pence to be returned.