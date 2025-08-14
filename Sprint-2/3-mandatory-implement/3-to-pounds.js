// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

//=============================================================
// const penceString = "9p"; //init variable

// const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// ); //remove p character at the end of the variable
// console.log(penceStringWithoutTrailingP);

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //
// console.log(paddedPenceNumberString); //give format of 3 zeroes if the number is less than 3 digits.

// const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// ); //get ponds value conversion changes for given pence

// console.log(pounds);

// const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0"); //get the reminds after conversion to pounds

// console.log(`£${pounds}.${pence}`);

//------------------------------------------------------------------------------------------

function pensToPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  ); //remove p character at the end of the variable
  //console.log(penceStringWithoutTrailingP);

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //
  //console.log(paddedPenceNumberString); //give format of 3 zeroes if the number is less than 3 digits.

  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  ); //get ponds value conversion changes for given pence

  //console.log(pounds);

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0"); //get the reminds after conversion to pounds

  return `£${pounds}.${pence}`;
}

//test----1
let moneyA = "90p";
console.log(`${pensToPounds(moneyA)}`);

//test----2
moneyA = "710p";
console.log(`${pensToPounds(moneyA)}`);

//test----3
moneyA = "1210p";
console.log(`${pensToPounds(moneyA)}`);
