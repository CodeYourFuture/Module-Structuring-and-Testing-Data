function getPenceString(penceString){

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
    //removes p
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    //puts zeros in front of number if less than 3 digits
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
    //removes last 2 digits to get pounds
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
    //gets last 2 digits to get pence, if less than 2 digits adds zeros to end of string but shouldnt be less than 3
    //due to padStart above
return `£${pounds}.${pence}`;
    // returns string with pounds and pence in correct format
}

console.log(getPenceString("399p"));
    // tested with 123p 1200p 24589p 89p 9p and 0p