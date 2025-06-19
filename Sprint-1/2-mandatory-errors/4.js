const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";

//There are two issues that will cause the codes to run errors.
//The first issue is that variable names cannot begin with a number.

const 12HourClockTime = "20:53"; 
//Invalid, and will cause an error because it starts with 12.

const hour12ClockTime = "20:53";
//To make it valid, use a letter to start the variable name.


const 12HourClockTime = "20:53"; // 20:53 is not 12-hour time
const 24hourClockTime = "08:53"; //08:53 is 12-hour (AM), or 24-hour (morning)
//The second issue is that the time values are swapped.
//"20:53" is in 24-hour format (it means 8:53 PM).
//"08:53" is in 12-hour format, 
//if it's meant to be 8:53 AM.
//So, these two lines of code are invalid because they have 
//been labelled the other way round.

//Fix (correct labelling)
const hour24ClockTime = "20:53"; // 8:53 PM
const hour12ClockTime = "08:53 AM"; // 8:53 AM
//The two lines of code I showed earlier are now valid.

