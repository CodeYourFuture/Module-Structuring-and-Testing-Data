// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  if (typeof time !== "string" || !/^\d{1,2}:\d{2}$/.test(time)) {
    return "Invalid time format";
  }
  const hours = Number(time.substring(0, 2));
  const min = Number(time.substring(3, 5));

  if (
    isNaN(hours) ||
    isNaN(min) ||
    hours < 0 ||
    min < 0 ||
    hours > 23 ||
    min > 59
  ) {
    return "Invalid time format";
  }

  const chang_min = String(min).padStart(2, "0");

  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${chang_min} pm`;
  } else if (hours === 12) {
    return `${hours}:${chang_min} pm`;
  } else if (hours === 0) {
    return `12:${chang_min} am`;
  } else {
    return `${String(hours).padStart(2, "0")}:${chang_min} am`;
  }
}

// console.log(formatAs12HourClock(`23:59`));

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

const currentOutput3 = formatAs12HourClock("24:15");
const targetOutput3 = "Invalid time format";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// console.log(formatAs12HourClock("18:00"));

// 23:59, 12:01 and 24:01,18:00,
