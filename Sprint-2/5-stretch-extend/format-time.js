// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  } else if (hours === 12) {
    return `${time} pm`;
  }
  //  added else if because we want to check if the hours are equal to 12, if they are we want to return the time with pm
  return `${time} am`;
}
const currentOutput = formatAs12HourClock("12:00");
const targetOutput = "12:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "08:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
);
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "00:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);