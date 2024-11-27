// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} am`;
  }
  if (hours === 12) {
    return `12:${minutes} pm`;
  }
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
  } else {
  return `${String(time).padStart(2, "0")} am`;
  }
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

console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  `Expected "08:00 am" but got "${formatAs12HourClock("08:00")}"`
);

console.assert(
  formatAs12HourClock("23:00") === "11:00 pm",
  `Expected "11:00 pm" but got "${formatAs12HourClock("23:00")}"`
);

console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  `Expected "12:00 am" but got "${formatAs12HourClock("00:00")}"`
);

console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  `Expected "12:00 pm" but got "${formatAs12HourClock("12:00")}"`
);

console.assert(
  formatAs12HourClock("13:45") === "01:45 pm",
  `Expected "01:45 pm" but got "${formatAs12HourClock("13:45")}"`
);

console.assert(
  formatAs12HourClock("09:15") === "09:15 am",
  `Expected "09:15 am" but got "${formatAs12HourClock("09:15")}"`
);