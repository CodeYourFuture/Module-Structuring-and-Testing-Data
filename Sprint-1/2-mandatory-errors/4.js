const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";

console.log(12HourClockTime , 24hourClockTime);

// Answer
// After running the code, it gave an error message "SyntaxError: Invalid or unexpected token". 
// This error means that Javascript was unable to read the code because a variable name cannot start with a number
// I can fix this code by removing the numbers from the start of the variable name

const HourClockTime = "20:53";
const hourClockTime = "08:53";