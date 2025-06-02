// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/* 
The error message "ReferenceError: Cannot access 'cityOfBirth' before initialization
    at Object.<anonymous> " comes up because when the computor reads the first line it 
    recognised that cityOfbirth is an identifer however it get confused as it has not
    been declaed beforehand and runs into an error as a result. To overcome this issue
     and access cityOfBirth, simply declare it in the 1st line and then in the 2nd line 
     use console.log() to display its value to the terminal as seen below:
*/

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);