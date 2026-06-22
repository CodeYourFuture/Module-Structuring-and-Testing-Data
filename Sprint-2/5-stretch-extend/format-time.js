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

const currentOutput = formatAs12HourClock("00:00");
const targetOutput = "12:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`,
  "midnight should be 12:00 am"
);
const currentOutput2 = formatAs12HourClock("00:30");
const targetOutput2 = "12:30 am";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
  "00:30 should be 12:30 am"
);

const currentOutput3 = formatAs12HourClock("01:30");
const targetOutput3 = "01:30 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`,
  "01:30 should be 01:30 am"
);
const currentOutput4 = formatAs12HourClock("11:59");
const targetOutput4 = "11:59 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`,
  "11:59 should be 11:59 am"
);
const currentOutput5 = formatAs12HourClock("12:30");
const targetOutput5 = "12:30 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`,
  "12:30 should be 12:30 pm"
);
const currentOutput6 = formatAs12HourClock("15:45");
const targetOutput6 = "03:45 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`,
  "15:45 should be 03:45 pm"
);
const currentOutput7 = formatAs12HourClock("23:30");
const targetOutput7 = "11:30 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`,
  "23:30 should be 11:30 pm"
);
// fixing the bugs found:
function formatAs12HourClock(time) {
  const hours24 = Number(time.slice(0, 2)); // 23:00 ---> "23"
  const minutes = time.slice(-2); // 23:00 ---> "00"

  let period = "am";
  let hours12 = hours24;

  if (hours24 === 0) {
    hours12 = 12; // midnight
  } else if (hours24 === 12) {
    period = "pm"; // noon
  } else if (hours24 > 12) {
    hours12 = hours24 - 12;
    period = "pm";
  }

  return `${String(hours12).padStart(2, "0")}:${minutes} ${period}`; // converts the return output to string type and padded to 2 length.
}
