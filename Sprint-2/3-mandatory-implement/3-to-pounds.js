// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

//This function take the price in pence+P format and change it to £+pound format.for example input = "399p" , output="£3.99"
function toPounds(penceString){
  let penceStringWithoutP="";
  if (penceString.slice(-1)=="p"){
       penceStringWithoutP=penceString.slice(0,-1);
  } 
  else{
    penceStringWithoutP=penceString;
   }
  let paddedPenceNumberString = penceStringWithoutP.padStart(3, "0");
  let pounds = paddedPenceNumberString.substring( 0,paddedPenceNumberString.length - 2);
  let pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
 return "£"+pounds+"."+pence
}

console.log(toPounds("399p"))
console.log(toPounds("399"))
console.log(toPounds("0p"))
console.log(toPounds("10"))
console.log(toPounds("1p"))
console.log(toPounds("105930p"))
