const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";


//-------------------Errors:
// 'Uncaught SyntaxError: Invalid or unexpected token' is occuring because the variable starts with a number which is not allowed in JavaScript variable naming conventions.
// "20:53" is not the correct time in 12-hour format, it should be "08:53".


//----------------------Fix:
// Rename the variable to start with a letter instead of a number and replace the time with a valid 12-hour format time.
const twelveHourTime = "08:53";
const twentyfourHourTime = "20:53";




