// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
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

// right format of the function

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  let period = "am";

  let formattedHour = hours;

  if (hours === 0) {
    formattedHour = 12;
  } else if (hours > 12) {
    formattedHour = hours - 12;

    period = "pm";
  } else if (hours === 12) {
    period = "pm";
  }

  const formattedTime = `${formattedHour

    .toString()

    .padStart(2, "0")}:${time.slice(3)} ${period}`;

  return formattedTime;
}

// Test 1, AM time

const currentOutput1 = formatAs12HourClock("08:00");

const targetOutput1 = "08:00 am";

console.assert(
  currentOutput1 === targetOutput1,

  `Test 1 failed: ${currentOutput1}`
);

// Test 2 ,PM time

const currentOutput2 = formatAs12HourClock("23:00");

const targetOutput2 = "11:00 pm";

console.assert(
  currentOutput2 === targetOutput2,

  `Test 2 failed: ${currentOutput2}`
);

// Test 3, Noon (12:00)

const currentOutput3 = formatAs12HourClock("12:00");

const targetOutput3 = "12:00 pm";

console.assert(
  currentOutput3 === targetOutput3,

  `Test 3 failed: ${currentOutput3}`
);

// Test 4, Midnight (00:00)

const currentOutput4 = formatAs12HourClock("00:00");

const targetOutput4 = "12:00 am";

console.assert(
  currentOutput4 === targetOutput4,

  `Test 4 failed: ${currentOutput4}`
);

// Test 5, Single digit hour like (01:00)

const currentOutput5 = formatAs12HourClock("01:00");

const targetOutput5 = "01:00 am";

console.assert(
  currentOutput5 === targetOutput5,

  `Test 5 failed: ${currentOutput5}`
);

// Test 6, Edge case with 12:30 PM

const currentOutput6 = formatAs12HourClock("12:30");

const targetOutput6 = "12:30 pm";

console.assert(
  currentOutput6 === targetOutput6,

  `Test 6 failed: ${currentOutput6}`
);

// Test 7, Edge case with 13:00

const currentOutput7 = formatAs12HourClock("13:00");

const targetOutput7 = "01:00 pm";

console.assert(
  currentOutput7 === targetOutput7,

  `Test 7 failed: ${currentOutput7}`
);
