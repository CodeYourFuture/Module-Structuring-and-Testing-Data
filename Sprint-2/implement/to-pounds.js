// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs



function toPounds(penceString){

    //removing p from the end of the string
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

    //pad the string to be sure it has 3 digits and if not add 0 to the start
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

    //extract pound
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

    //extract pence
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2);

    // return pound and pence in new format
    return (`£${pounds}.${pence}`);
}

    console.log(toPounds("399p"));      // OUTPUT: £3.99
    console.log(toPounds("4590p"));     // OUTPUT: £45.90
    console.log(toPounds("34p"));       // OUTPUT: £0.34