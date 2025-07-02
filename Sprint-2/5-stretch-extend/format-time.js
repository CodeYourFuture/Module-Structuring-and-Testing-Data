// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

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
 
// i put this function for test in console, chrome but it showed undefined then i put 12:00 and the output is:Uncaught SyntaxError: 
// Unexpected token.so the function is not workable and has some bugs.Unfortunately, i can not work out by myself, i went to chatGpt which 
// explained the detail to me. function format12HourClock(time) does not work right because it does not work for 12:00, 24:00 d not for
// minutes either. The right function should be:

function formatAs12HourClock(time) {
  const hours24 = Number(time.slice(0, 2));
  const minutes = time.slice(3);
  
  const period = hours24 >= 12 ? "pm" : "am";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;

  return `${String(hours12).padStart(2, "0")}:${minutes} ${period}`;
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

// const period = hours24 >= 12 ? "pm" : "am";This line uses a ternary operator — a concise way to write an if...else statement.
// If hours24 is greater than or equal to 12, then set period to "pm".Otherwise, set it to "am".

// const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;This is also a ternary operator (shortcut for if...else) 
// used to convert 24-hour time to 12-hour time format, which means:"If hours24 % 12 is 0, then set hours12 to 12, 
// otherwise set it to hours24 % 12." For me, i can understand now with chatgpt help.


