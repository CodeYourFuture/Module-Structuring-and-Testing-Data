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

// Midnight
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  "00:00 should be 12:00 am"
);

// Noon
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  "12:00 should be 12:00 pm"
);

// Minutes included
console.assert(
  formatAs12HourClock("14:45") === "2:45 pm",
  "14:45 should be 2:45 pm"
);

// Single-digit hour AM
console.assert(
  formatAs12HourClock("09:30") === "9:30 am",
  "09:30 should be 9:30 am"
);

// Single-digit hour PM
console.assert(
  formatAs12HourClock("13:05") === "1:05 pm",
  "13:05 should be 1:05 pm"
);

// Edge: 12:59 PM
console.assert(
  formatAs12HourClock("12:59") === "12:59 pm",
  "12:59 should be 12:59 pm"
);

// Edge: 00:59 AM
console.assert(
  formatAs12HourClock("00:59") === "12:59 am",
  "00:59 should be 12:59 am"
);

function formatAs12HourClock(time) {
  const [hourStr, minuteStr] = time.split(":");
  let hours = Number(hourStr);
  const minutes = minuteStr;

  let period = "am";

  if (hours === 0) {
    hours = 12; // midnight
  } else if (hours === 12) {
    period = "pm"; // noon
  } else if (hours > 12) {
    hours -= 12;
    period = "pm";
  }

  return `${hours}:${minutes} ${period}`;
} 