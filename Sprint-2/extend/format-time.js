// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5); // 〰️ Get the minute part of the time

  // 〰️ Validate the input: check if hours and minutes are numbers and within valid ranges
  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return null; // 〰️ Return null for invalid input
  }

  // 〰️ Handle midnight (00:00)
  if (hours === 0) {
    return `12:${minutes} am`;
  }

  // 〰️ Handle noon (12:00)
  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  // 〰️ Handle PM times (hours greater than 12)
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
    return `${hours - 12}:${minutes} pm`;
  }
  return `${time} am`;
  // 〰️ Handle AM times (hours less than 12)
  return `${hours}:${minutes} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
//Test cases

// 〰️ Test a standard morning time (8:00 AM)
const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
   currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

// 〰️ Additional test cases

// 〰️ Test midnight (12:00 AM)
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// 〰️ Test noon (12:00 PM)
const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// 〰️ Test just after noon (12:30 PM)
const currentOutput5 = formatAs12HourClock("12:30");
const targetOutput5 = "12:30 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// 〰️ Test just after midnight (12:30 AM)
const currentOutput6 = formatAs12HourClock("00:30");
const targetOutput6 = "12:30 am";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

// 〰️ Invalid input cases

// 〰️ Test an invalid time (hours out of range)
const currentOutput7 = formatAs12HourClock("24:00");
console.assert(
  currentOutput7 === null,
  `expected null but got: ${currentOutput7}`
);

// 〰️ Test an invalid time (minutes out of range)
const currentOutput8 = formatAs12HourClock("12:60");
console.assert(
  currentOutput8 === null,
  `expected null but got: ${currentOutput8}`
);

// 〰️ Test completely invalid input (non-numeric string)
const currentOutput9 = formatAs12HourClock("invalid");
console.assert(
  currentOutput9 === null,
  `expected null but got: ${currentOutput9}`
);

// 〰️ Test missing hour digit (invalid format)
const currentOutput10 = formatAs12HourClock("8:00");
console.assert(
  currentOutput10 === null,
  `expected null but got: ${currentOutput10}`
);

console.log(formatAs12HourClock("07:00"));
console.log(formatAs12HourClock("19:00"));
console.log(formatAs12HourClock("00:00"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("24:00"));
console.log(formatAs12HourClock("23:59"));
console.log(formatAs12HourClock("invalid"));
console.log(formatAs12HourClock("22:63"));

