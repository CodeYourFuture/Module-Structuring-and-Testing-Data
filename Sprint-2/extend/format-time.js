// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
// would still like to learn jest but it seemed like too much for this so just did manual tests and kinda explored jest cause its used on codewars. usd codepen for running code and testing.
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
console.log(formatAs12HourClock('08:00')); // 8:00 am
console.log(formatAs12HourClock('12:00')); // 12:00 pm
console.log(formatAs12HourClock('14:30')); // 2:30 pm BUG ALERT - we get a output of "2:00 pm" and expect a output of "2:30 pm" check how it is formatted and how numbers are rounded.
console.log(formatAs12HourClock('23:00')); // 11:00 pm
console.log(formatAs12HourClock('12:00')); // 12:00 am BUG ALERT - we get a output of "00:00 am" which is acceptable but lets test 00:00 as the input then and make sure we get the same and also if this is the case then how does it know when we want 12 midday?
console.log(formatAs12HourClock('12:59')); // 12:59 pm BUG ALERT - it reads it as am but it should be pm, lets check how it reads the 12. cause when changed to 00:59 it reads it as am. this conflicts with the above. dig deeper.
console.log(formatAs12HourClock('23:59')); // 11:59 pm
console.log(formatAs12HourClock('00:59')); // 12:59 am RELATED to the BUG ALERT on line 30

console.log(formatAs12HourClock('24:00')); // Error 
console.log(formatAs12HourClock('08:60')); // Error BUG ALERT this is accepted even tho a false time so we have validation for inputs and therefore it returns 8:60 am
console.log(formatAs12HourClock('abc')); // Error BUG ALERT this returns the input as the program lacks validations for the inputs
console.log(formatAs12HourClock(null)); // Error
console.log(formatAs12HourClock(undefined)); // Error
console.log(formatAs12HourClock('')); // Error BUG ALERT this returns 'am' by default

console.log(formatAs12HourClock('01:00')); // 1:00 am
console.log(formatAs12HourClock('12:01')); // 12:01 pm BUG ALERT apart from the minutes not displaying the 12th hour is being read as 00:00 and stays in am we need to swap the 12 and 00 times somehow
console.log(formatAs12HourClock('22:59')); // 10:59 pm
console.log(formatAs12HourClock('23:01')); // 11:01 pm BUG ALERT again the minutes are not appearing and we need to check the formatting