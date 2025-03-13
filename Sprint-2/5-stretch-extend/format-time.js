// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12 && hours != 24) {
    return `${hours - 12}:00 pm`;
  }
  if (hours==24)   // while user input is 24 it will show the result into 12 am . 
  {
    return `${hours-12}:00 am`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:30");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

console.log(`The result is ${currentOutput}`);

const currentOutput2 = formatAs12HourClock("12:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
console.log(`The result is ${currentOutput2}`);

const currentOutput3 = formatAs12HourClock("24:00");
const targetOutput3 = "24:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
console.log(`The result is ${currentOutput3}`);
