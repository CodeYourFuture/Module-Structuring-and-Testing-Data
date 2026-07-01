// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs



function toSnakeCase(str) {
  const pecestringwithouttrailingp = pencestring.substring(0,pencestring.length -1);
  const padded penceNumberstring = pencestringWithoutTrailingP.padstart(3,"0");
  const pounds = paddedpenceNumberString.substring(0, paddedpencenumberstring.length-2);
  const pencr= paddedpencenumberstring.substring(paddedpencenumberstring.length -2)
  .padEnd(2,"0");
  return £${pounds}.${pence}`;
}
// test the function with different inputs
consloe.log(topounds("399p"), // £3.99  
4console.log(toPounds("9p"));    // £0.09
console.log(toPounds("99p"));   // £0.99
console.log(toPounds("1234p")); // £12.34   


