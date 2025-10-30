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

//Test cases
console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  "Test 1 failed"
);

console.assert(
  formatAs12HourClock("23:15") === "11:15 pm",
  "Test 2 failed"
);

console.assert(
  formatAs12HourClock("00:05") === "12:05 am",
  "Test 3 failed"
);

console.assert(
  formatAs12HourClock("12:30") === "12:30 pm",
  "Test 4 failed"
);

console.assert(
  formatAs12HourClock("13:45") === "01:45 pm",
  "Test 5 failed"
);

//fixed version
/*function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(3); // keep the minutes as they are
  let period = "am";

  if (hours === 0) {
    hours = 12; // midnight
  } else if (hours === 12) {
    period = "pm"; // noon
  } else if (hours > 12) {
    hours -= 12;
    period = "pm";
  }

  return `${hours.toString().padStart(2, "0")}:${minutes} ${period}`;
}
  */
