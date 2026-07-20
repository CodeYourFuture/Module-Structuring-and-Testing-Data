// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
function formatAs12HourClock(time) {
  const [hourString, minutes] = time.split(":");
  const hours = Number(hourString);

  const pad = (h) => String(h).padStart(2, "0");

  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  if (hours < 12) {
    return `${pad(hours)}:${minutes} am`;
  }

  return `${pad(hours - 12)}:${minutes} pm`;
}

// Existing tests (updated to expect zero-padded hours)
console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  "08:00 should be 08:00 am"
);

console.assert(
  formatAs12HourClock("23:00") === "11:00 pm",
  "23:00 should be 11:00 pm"
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

// PM with minutes, hour needs padding
console.assert(
  formatAs12HourClock("13:30") === "01:30 pm",
  "13:30 should be 01:30 pm"
);

// AM with minutes, hour needs padding
console.assert(
  formatAs12HourClock("09:45") === "09:45 am",
  "09:45 should be 09:45 am"
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

// 1 PM, hour needs padding
console.assert(
  formatAs12HourClock("13:00") === "01:00 pm",
  "13:00 should be 01:00 pm"
);

// 1 AM, hour needs padding
console.assert(
  formatAs12HourClock("01:00") === "01:00 am",
  "01:00 should be 01:00 am"
);