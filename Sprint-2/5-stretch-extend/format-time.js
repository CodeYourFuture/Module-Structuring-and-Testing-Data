// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
;
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  if (h)

  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }

  return `${time} am`;
}

// Existing tests
console.assert(
  formatAs12HourClock("8:00") === "8:00 am",
  "8:00 should be 8:00 am"
);

console.assert(
  formatAs12HourClock("23:00") === "11:00 pm",
  "23:00 should be 11:00 pm"
);

// Additional tests

// Midnight
console.assert(
  formatAs12HourClock("0:00") === "12:00 am",
  "0:00 should be 12:00 am"
);

// Noon
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  "12:00 should be 12:00 pm"
);

// PM with minutes
console.assert(
  formatAs12HourClock("13:30") === "1:30 pm",
  "13:30 should be 1:30 pm"
);

// AM with minutes
console.assert(
  formatAs12HourClock("9:45") === "9:45 am",
  "9:45 should be 9:45 am"
);

// Last minute of the day
console.assert(
  formatAs12HourClock("23:59") === "11:59 pm",
  "23:59 should be 11:59 pm"
);

// One minute after midnight
console.assert(
  formatAs12HourClock("00:01") === "12:01 am",
  "00:01 should be 12:01 am"
);

// One minute after noon
console.assert(
  formatAs12HourClock("12:01") === "12:01 pm",
  "12:01 should be 12:01 pm"
);

// 1 PM
console.assert(
  formatAs12HourClock("13:00") === "1:00 pm",
  "13:00 should be 1:00 pm"
);