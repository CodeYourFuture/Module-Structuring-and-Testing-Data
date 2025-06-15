// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/* 
 =========> Shorten variable names for readability
 'penceString' --> 'pStr'
 'penceStringWithoutTrailingP' --> 'penceWithoutP'
 'paddedPenceNumberString' --> 'paddedPence'

 =========> Reduce/ remove redundant string methods and properties
 '.substring()' --> .slice() is more versatile, simpler for code trimming and unlike .substring(), doesn't need .length calculation  
 '.length' --> .slice() can count from the end of the string, making .length unnecessary. 
 '.padEnd()' --> Redundant because 'padStart(3)' guarantees enough digits
 'pStr.toString()' --> To make sure input is a string
 '(!value.endsWith('p')) {value += 'p';}' --> Add 'p' at the end if it's missing
*/

// =========> Refactored Code:

function toPounds(pStr) {
    
    let value = pStr.toString();

    if (!value.endsWith('p')) {
        value += 'p';
    }

    const penceWithoutP = value.slice(0, -1);
    const paddedPence = penceWithoutP.padStart(3, "0");
    const pounds = paddedPence.slice(0, -2);
    const pence = paddedPence.slice(-2);
    
    return `£${pounds}.${pence}`;
}

/*
console.log(toPounds("41586p"));  --> Output: £415.86
console.log(toPounds("15"));  --> Output: £0.15
console.log(toPounds(7813649));  --> Output: £78136.49
*/
