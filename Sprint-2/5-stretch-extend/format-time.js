// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  if (hours == 12) {
    return `${hours}:${minutes} pm`;
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }

  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (time.charAt(0) === "0") {
    return `${time.slice(1)} am`;
  }

  return `${time} am`;
}

console.log(`the 12 hr format for 01:01 is ${formatAs12HourClock("05:01")}`);
console.log(`the 12 hr format for 13:01 is ${formatAs12HourClock("13:01")}`);

const currentOutput = formatAs12HourClock("01:01");
const targetOutput = "1:01 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("13:01");
const targetOutput2 = "1:01 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("23:30");
const targetOutput3 = "11:30 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:01");
const targetOutput4 = "12:01 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
