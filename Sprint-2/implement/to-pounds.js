// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
const penceString = "399p";
function poundsPounds(penceString){
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);//delete a p 

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //make sure three charachter.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);// compare to pound.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  return `£${pounds}.${pence}`;
}
    console.log(poundsPounds("399p"));
    console.log(poundsPounds("99p"));
    console.log(poundsPounds("50000p"));
    console.log(poundsPounds("1200p"));