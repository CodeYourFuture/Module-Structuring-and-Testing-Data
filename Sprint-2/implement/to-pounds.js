// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

//assertArg check the validity of the data type pass as an argument
function assertArg(arg) {
    if (typeof arg !== "string") {
        throw new Error(`"${arg}" must be a string`);
    }
}

const toPounds = function (moneyInPence) {
  //check validity of moneyInPence
  assertArg(moneyInPence);

  
  const penceStringWithoutTrailingP = moneyInPence.substring(
    0,
    moneyInPence.length - 1
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
};

// console.log(toPounds("399p"));
// console.log(toPounds("1240999"));
// console.log(toPounds("1_500_987"));
