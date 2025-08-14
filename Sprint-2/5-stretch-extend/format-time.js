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

// MAIN PROBLEMS (BUGS)

// Fails because 12:00 is noon → should be "12:00 pm"
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  " Bug: Expected 12:00 to become 12:00 pm (noon)"
);

// Fails because 00:00 is midnight → should be "12:00 am"
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  " Bug: Expected 00:00 to become 12:00 am (midnight)"
);

// Fails because 13:00 should become "01:00 pm", but function returns "1:00 pm"
console.assert(
  formatAs12HourClock("13:00") === "01:00 pm",
  " Bug: Expected 13:00 to become 01:00 pm (needs padded hour)"
);

// Fails because function always adds ":00", so 13:30 would return "1:00 pm"
// 00 is hardcoded
// needs padded hour as well
console.assert(
  formatAs12HourClock("13:30") === "01:30 pm",
  " Bug: Expected 13:30 to become 01:30 pm (minutes not preserved)"
);

// FIXED CODE

function formatAs12HourClock(time) {
  const hours24 = Number(time.slice(0, 2));
  const minutes = time.slice(3); // Keep the real minutes

  let period = "am";
  let hours12 = hours24;

  if (hours24 === 0) {
    hours12 = 12;
  } else if (hours24 === 12) {
    period = "pm";
  } else if (hours24 > 12) {
    hours12 = hours24 - 12;
    period = "pm";
  }

  // Pad hour if less than 10
  const hourString = hours12 < 10 ? `0${hours12}` : `${hours12}`;
  return `${hourString}:${minutes} ${period}`;
}
