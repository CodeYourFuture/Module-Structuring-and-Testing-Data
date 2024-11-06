// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);
  if (hours === 0) {
    return `12:${minutes} am`;
  }
  else if (hours === 12) {
    return `12:${minutes} pm`;
  }
  else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
  return `${time} am`;
}

// Test case for 08:00
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

// Test case for 23:00
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

// Test case for midnight
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
// const hours = Number(time.slice(0, 2)); sets hours to 0 since it is not greater than 12
// 0 gets formatted as 00:00 am instead of 12:00 am

// Test case for noon
const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
// const hours = Number(time.slice(0, 2)); sets hours to 12 since it is not greater than 12
// 12 get formatted as 12:00 am instead of 12:00 pm

// Test case for 1:00 am
const currentOutput5 = formatAs12HourClock("01:00");
const targetOutput5 = "01:00 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// Test case for single-digit PM time (1:00 pm)
const currentOutput6 = formatAs12HourClock("13:00");
const targetOutput6 = "1:00 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

// Test case for early morning (3:45 am)
const currentOutput7 = formatAs12HourClock("03:45");
const targetOutput7 = "03:45 am";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

// Test case for just before noon (11:59 am)
const currentOutput8 = formatAs12HourClock("11:59");
const targetOutput8 = "11:59 am";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);

// Test case for just after midnight (12:01 am)
const currentOutput9 = formatAs12HourClock("00:01");
const targetOutput9 = "12:01 am";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`
);
// This is to test after midnight and noon is fixed

// Edge case for invalid time (e.g., "25:00")
try {
  const currentOutput10 = formatAs12HourClock("25:00");
  console.log("No error thrown for invalid input (25:00)");
} catch (e) {
  console.log("Error correctly thrown for invalid input (25:00)");
}
// This is thrown out due to invalid input, used try instead of console.assert.

// Edge case for half-hour (e.g., "14:30")
const currentOutput11 = formatAs12HourClock("14:30");
const targetOutput11 = "2:30 pm";
console.assert(
  currentOutput11 === targetOutput11,
  `current output: ${currentOutput11}, target output: ${targetOutput11}`
);
// when hours is > 12, it gets formatted to 12:00 hour format and adds :00 pm
// therefore 14:30 gets formatted to 2:00 pm instead of 2:30 pm

// Edge case for one minute to midnight (e.g., "23:59")
const currentOutput12 = formatAs12HourClock("23:59");
const targetOutput12 = "11:59 pm";
console.assert(
  currentOutput12 === targetOutput12,
  `current output: ${currentOutput12}, target output: ${targetOutput12}`
);
// when hours is > 12, it gets formatted to 12:00 hour format and adds :00 pm
// therefore 14:30 gets formatted to 11:00 pm instead of 11:59 pm