// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// The main function:
//function formatAs12HourClock(time) {
// const hours = Number(time.slice(0, 2));
//if (hours > 12) {
//  return `${hours - 12}:00 pm`;
//}
//return `${time} am`;
//}

// Tests:
// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//  currentOutput === targetOutput,
//  `current output: ${currentOutput}, target output: ${targetOutput}`
// ); 

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//  currentOutput2 === targetOutput2,
//  `current output: ${currentOutput2}, target output: ${targetOutput2}`
// ); 

// const currentOutput3 = formatAs12HourClock("12:00");
// const targetOutput3 = "12:00 pm";
//  console.assert(
//  currentOutput3 === targetOutput3,
//  `current output: ${currentOutput3}, target output: ${targetOutput3}`
// ); 
// const currentOutput4 = formatAs12HourClock("00:00");
// const targetOutput4 = "12:00 am";
// console.assert(
// currentOutput4 === targetOutput4,
//  `current output: ${currentOutput4}, target output: ${targetOutput4}`
// ); 
// const currentOutput5 = formatAs12HourClock("15:30");
// const targetOutput5 = "3:30 pm";
// console.assert(
// currentOutput5 === targetOutput5,
//  `current output: ${currentOutput5}, target output: ${targetOutput5}`
// ); 

// const currentOutput6 = formatAs12HourClock("11:45");
// const targetOutput6 = "11:45 am";
// console.assert(
//  currentOutput6 === targetOutput6,
// `current output: ${currentOutput6}, target output: ${targetOutput6}`
// );

//Fixing the function:
function formatAs12HourClockFixed(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  let period = "am";

  if (hours === 0) {
    return `12:${minutes} am`;
  }
  if (hours === 12) {
    period = "pm";
  }
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
  return `${hours}:${minutes} ${period}`;
}

// Re-testing :
const currentOutput1 = formatAs12HourClockFixed("08:00");
const targetOutput1 = "8:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
); 

const currentOutput2 = formatAs12HourClockFixed("7:45");
const targetOutput2 = "7:45 am";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClockFixed("23:00");
const targetOutput3 = "11:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClockFixed("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClockFixed("00:00");
const targetOutput5 = "12:00 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClockFixed("15:30");
const targetOutput6 = "3:30 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClockFixed("11:45");
const targetOutput7 = "11:45 am";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClockFixed("25:30");
const targetOutput8 = "Invalid time";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);

const currentOutput9 = formatAs12HourClockFixed("1724");
const targetOutput9 = "Invalid time";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`
);
console.log (formatAs12HourClockFixed("08:00"));

console.log (formatAs12HourClockFixed("7:45"));
console.log (formatAs12HourClockFixed("23:00"));
console.log (formatAs12HourClockFixed("12:00"));
console.log (formatAs12HourClockFixed("00:00"));
console.log (formatAs12HourClockFixed("15:30"));
console.log (formatAs12HourClockFixed("11:45"));
console.log (formatAs12HourClockFixed("25:30"));
console.log (formatAs12HourClockFixed("1724688"));