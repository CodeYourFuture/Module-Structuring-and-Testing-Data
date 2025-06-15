// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  let period = "am";

  if (hours === 0) {
    hours = 12;
  } else if (hours === 12) {
    period = "pm";
  } else if (hours > 12) {
    hours -= 12;
    period = "pm";
  }

  return `${String(hours).padStart(2, "0")}:${minutes} ${period}`;
}

// TEST CASES
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  "Failed: 00:00 should be 12:00 am"
);

console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  "Failed: 08:00 should be 08:00 am"
);

console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  "Failed: 12:00 should be 12:00 pm"
);

console.assert(
  formatAs12HourClock("13:45") === "01:45 pm",
  "Failed: 13:45 should be 01:45 pm"
);

console.assert(
  formatAs12HourClock("23:59") === "11:59 pm",
  "Failed: 23:59 should be 11:59 pm"
);