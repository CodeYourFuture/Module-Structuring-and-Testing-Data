/* 
 Explain the error
. In JavaScript, variable names cannot start with a number, but they can end with a number.
. The values of the two variables don’t match the intended clock formats.

const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";
*/
// Correct way to do it
const hourClock12 = "08:53"; // 12-hour format example (AM)
const hourClock24 = "20:53"; // 24-hour format (PM)
