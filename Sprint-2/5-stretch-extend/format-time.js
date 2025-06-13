// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);
  if (hours > 12) {
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes} pm`;
  } else if (hours < 12) {
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} am`;
  } else if (hours == 12) {
    return `12:00 pm`;
  }
  return `${time} am`;
}

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
/* my tests */
// hours < 12 and minutes = 0
const currentOutput3 = formatAs12HourClock("07:00");
const targetOutput3 = "07:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// hours < 12 and minutes > 0

const currentOutput4 = formatAs12HourClock("07:23");
const targetOutput4 = "07:23 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// hours = 12
const currentOutput5 = formatAs12HourClock("12:00");
const targetOutput5 = "12:00 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// hours > 12 and minutes > 0
const currentOutput6 = formatAs12HourClock("13:15");
const targetOutput6 = "01:15 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);
