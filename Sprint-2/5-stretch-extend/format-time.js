// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours24 = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  const period = hours24 >= 12 ? "pm" : "am";

  let hours12 = hours24 % 12;
  if (hours12 === 0) hours12 = 12;

  const paddedHours12 = String(hours12).padStart(2, "0");

  return `${paddedHours12}:${minutes} ${period}`;
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



// --------------------
// Extra tests (edge cases + minutes)
// --------------------

// Midnight (00:00) should be 12:00 am
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  `current output: ${formatAs12HourClock("00:00")}, target output: 12:00 am`
);

// Noon (12:00) should be 12:00 pm
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  `current output: ${formatAs12HourClock("12:00")}, target output: 12:00 pm`
);

// Minutes must be preserved
console.assert(
  formatAs12HourClock("23:15") === "11:15 pm",
  `current output: ${formatAs12HourClock("23:15")}, target output: 11:15 pm`
);

console.assert(
  formatAs12HourClock("13:05") === "01:05 pm",
  `current output: ${formatAs12HourClock("13:05")}, target output: 01:05 pm`
);

// Morning should stay am
console.assert(
  formatAs12HourClock("01:09") === "01:09 am",
  `current output: ${formatAs12HourClock("01:09")}, target output: 01:09 am`
);

// Boundary just before noon
console.assert(
  formatAs12HourClock("11:59") === "11:59 am",
  `current output: ${formatAs12HourClock("11:59")}, target output: 11:59 am`
);