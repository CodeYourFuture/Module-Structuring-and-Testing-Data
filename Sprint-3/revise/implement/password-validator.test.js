/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
let previousPasswords = ["StarDust3434##"];
const { count } = require("console");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const { Z_ASCII } = require("zlib");

/* function PassValidChecker() outputs true if all the 6 conditions stated above equal to true. For extra practice, I create a function for each condition first.
Afterward I create PassValidChecker(). */

//first function: it counts the number of characters in the string str.
const charCount = (str) => str.length;
console.log(charCount("sogaand"));
//test (`expected output `, ()=>{
 //   expect(charCount("Sog147$0and")).toBe(11);
// });
//second function: it counts the number of upper case letters.
const upperCaseCount = (str) => {
    let strToArray = str.split("");
    let upperCase = strToArray.filter(letter => (letter >= 'A' && letter <= 'Z')).length;
    return upperCase;
};
console.log(upperCaseCount("SogandMohAmmadi"));
//third function: it counts the number of lower case letter.
const lowerCaseCount = (str) => {
    let strToArray = str.split("");
    let lowerCase = strToArray.filter(letter => (letter >= 'a' && letter <= 'z')).length;
    return lowerCase;
};
console.log(lowerCaseCount("moein THE BEST big bRooooooother"));
//fourth function: it counts the number of numerical data.
const numCount = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if ( str[i] >= 0 && str[i] <= 9 ) {
             count++;
        }
    }
    return count;
}
console.log(numCount("efhesofhdu12345"));
//fifth function: it counts the number of symbols.
const symbolCount = (str) => {
    let strToArray = str.split("");
    let symbolInArray = strToArray.filter(letter => (["!", "#", "$", "%", ".", "*", "&"].includes(letter))).length;
    return symbolInArray;
}
console.log(symbolCount("sog!#*"));
//sixth function: I need to have access to user's previous password recorded in a database. 

const previousPassCheck = (str,previousPasswords) => {
    if (previousPasswords.includes(str)){
        return false;
    }
    else{
        return true;
    }
}
console.log(previousPassCheck("StarDust3434##", previousPasswords)); 

//now it's time to use these functions to write passValidChecker():
function passValidChecker(str, previousPasswords) {
    let errors = [];
    if ( (charCount(str)) < 5) {
        let charNumError = "Add at least 5 characters";
         errors.push(charNumError);
        
    }
    if ((upperCaseCount(str)) < 1){
        let upperCaseError = "Add at least 1 English uppercase letter e.g. A, B, M";
         errors.push(upperCaseError);
    }
    if((lowerCaseCount(str)) < 1){
         errors.push("Add at least 1 English lowercase letter e.g. a, b, m");
    }
    if((numCount(str)) < 1){
        errors.push("Add at least one number e.g. 1, 2, 9");
    }
    if((symbolCount(str)) < 1){
        errors.push("Add at least one of the following symbols: !, #, $, %, ., *, &");
    }  
    if (!previousPassCheck(str, previousPasswords)) {
        errors.push("You can not use previous passwords.")
    }
  
    
    return errors.length > 0 ? errors.join(",") : "Password is valid";
    
}
console.log(passValidChecker("sue"));