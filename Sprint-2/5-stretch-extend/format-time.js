// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = String(time.substring(0, 2).padStart(2, "0"));
  const min = String(time.substring(3).padStart(2, "0"));

  if (Number(hours) > 12) {
    return `${Number(hours) - 12}:${min} pm`;
  } else if (Number(hours) === 12) {
    return `${Number(hours)}:${min} pm`;
  } else if (Number(hours) === 0) {
    return `12:${min} am`;
  } else {
    return `${String(hours)}:${min} am`;
  }
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput1 = formatAs12HourClock("23:00");
const targetOutput1 = "11:00 pm";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
);

const currentOutput2 = formatAs12HourClock("12:05");
const targetOutput2 = "12:05 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("24:05");
const targetOutput3 = "12:05 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

console.log(formatAs12HourClock("18:00"));

// 23:59, 12:01 and 24:01,18:00,
