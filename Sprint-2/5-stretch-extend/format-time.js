// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else if (hours == 12) {
    return `12:${minutes} pm`;
  } else if (hours === 0) {
    return `12:${minutes} am`;
  }
  return `${String(hours).padStart(2, "0")}:${minutes} am`;
}
let currentOutput = formatAs12HourClock("00:01");
let targetOutput = "12:01 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("11:59");
const targetOutput2 = "11:59 am";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
currentOutput = formatAs12HourClock("00:00");
targetOutput = "12:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
currentOutput = formatAs12HourClock("04:12");
targetOutput = "04:12 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
