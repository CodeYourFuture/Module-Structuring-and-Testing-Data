// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
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
  }

  return `${time} am`;
}
console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  "08:00 should be 08:00 am"
);
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  "00:00 should be 12:00 am"
);
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  "12:00 should be 12:00 pm"
);
console.assert(
  formatAs12HourClock("13:45") === "01:45 pm",
  "13:45 should be 01:45 pm"
);
console.assert(
  formatAs12HourClock("01:30") === "01:30 am",
  "01:30 should be 01:30 am"
);

