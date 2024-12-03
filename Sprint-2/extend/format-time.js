// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// The main function for conversion (without modification)
// The main function for conversion (without modification)
function formatAs12HourClock(time) {
  // Validate the input format (HH:mm)
  const timeRegex = /^([01]?\d|2[0-3]):([0-5]\d)$/;
  if (!timeRegex.test(time)) {
    return "Error: Invalid input format";
  }

  const [hours, minutes] = time.split(":").map(Number);

  if (hours === 0) {
    // Midnight case
    return `12:${minutes.toString().padStart(2, "0")} am`;
  } else if (hours === 12) {
    // Noon case
    return `12:${minutes.toString().padStart(2, "0")} pm`;
  } else if (hours > 12) {
    // Afternoon to evening (1 pm to 11 pm)
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} pm`;
  } else {
    // Morning (1 am to 11 am)
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} am`;
  }
}

// Valid test cases
const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "08:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `Test failed: current output = ${currentOutput1}, expected = ${targetOutput1}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `Test failed: current output = ${currentOutput2}, expected = ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `Test failed: current output = ${currentOutput3}, expected = ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `Test failed: current output = ${currentOutput4}, expected = ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("13:15");
const targetOutput5 = "01:15 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `Test failed: current output = ${currentOutput5}, expected = ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("15:00");
const targetOutput6 = "03:00 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `Test failed: current output = ${currentOutput6}, expected = ${targetOutput6}`
);

// Invalid test cases
const invalidOutput1 = formatAs12HourClock("25:00");
const invalidTarget1 = "Error: Invalid input format";
console.assert(
  invalidOutput1 === invalidTarget1,
  `Test failed: current output = ${invalidOutput1}, expected = ${invalidTarget1}`
);

const invalidOutput2 = formatAs12HourClock("12:60");
const invalidTarget2 = "Error: Invalid input format";
console.assert(
  invalidOutput2 === invalidTarget2,
  `Test failed: current output = ${invalidOutput2}, expected = ${invalidTarget2}`
);

const invalidOutput3 = formatAs12HourClock("abc");
const invalidTarget3 = "Error: Invalid input format";
console.assert(
  invalidOutput3 === invalidTarget3,
  `Test failed: current output = ${invalidOutput3}, expected = ${invalidTarget3}`
);

const invalidOutput4 = formatAs12HourClock("3:5");
const invalidTarget4 = "Error: Invalid input format";
console.assert(
  invalidOutput4 === invalidTarget4,
  `Test failed: current output = ${invalidOutput4}, expected = ${invalidTarget4}`
);

const invalidOutput5 = formatAs12HourClock("");
const invalidTarget5 = "Error: Invalid input format";
console.assert(
  invalidOutput5 === invalidTarget5,
  `Test failed: current output = ${invalidOutput5}, expected = ${invalidTarget5}`
);

console.log("All tests completed.");
