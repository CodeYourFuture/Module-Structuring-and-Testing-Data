// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const [hourStr, minutes] = time.split(":");
  let hours = Number(hourStr);
  let period = "am";

  if (hours === 0) {
    hours = 12; // Midnight
  } else if (hours === 12) {
    period = "pm"; // Noon
  } else if (hours > 12) {
    hours -= 12;
    period = "pm";
  }

  return `${hours}:${minutes} ${period}`;
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
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4
   `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
const currentOutput5 = formatAs12HourClock("07:32");
const targetOutput5 = "07:32 am";
console.assert(
  currentOutput5 === targetOutput5
   `current output: ${currentOutput5}, target output: ${targetOutput5}`
);
const currentOutput6 = formatAs12HourClock("23:20");
const targetOutput6 = "11:20 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);