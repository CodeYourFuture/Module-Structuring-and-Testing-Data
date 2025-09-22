// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3));
  if (isNaN(hours) || isNaN(minutes)) {
    throw new Error("Invalid time");
  }
  if (hours < 0 || hours > 24 || minutes < 0 || minutes > 59) {
    throw new Error("Invalid time");
  }
  if (time[2] !== ":") {
    throw new Error("Invalid time");
  }
  if (time.length !== 5) {
    throw new Error("Invalid time");
  }

  const minutesStr = String(minutes).padEnd(2, 0);

  if (hours == 0) {
    return `12:${minutesStr} am`;
  }

  if (hours == 12 && minutes >= 0) {
    return `12:${minutesStr} pm`;
  }

  if (hours == 24) {
    return `12:${minutesStr} am`;
  }

  if (hours > 12) {
    return `${String(hours - 12).padStart(2, 0)}:${minutesStr} pm`;
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

const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("00:00");
const targetOutput4 = "12:00 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("15:30");
const targetOutput5 = "03:30 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("11:15");
const targetOutput6 = "11:15 am";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("00:30");
const targetOutput7 = "12:30 am";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClock("12:45");
const targetOutput8 = "12:45 pm";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);

const currentOutput9 = formatAs12HourClock("24:00");
const targetOutput9 = "12:00 am";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`
);

try {
  formatAs12HourClock("25:00");
  console.assert(false, "Expected an error for invalid hours");
} catch (e) {
  console.assert(
    e.message === "Invalid time",
    `Unexpected error message: ${e.message}`
  );
}

try {
  formatAs12HourClock("10:60");
  console.assert(false, "Expected an error for invalid minutes");
} catch (e) {
  console.assert(
    e.message === "Invalid time",
    `Unexpected error message: ${e.message}`
  );
}

try {
  formatAs12HourClock("ab:cd");
  console.assert(false, "Expected an error for non-numeric input");
} catch (e) {
  console.assert(
    e.message === "Invalid time",
    `Unexpected error message: ${e.message}`
  );
}
