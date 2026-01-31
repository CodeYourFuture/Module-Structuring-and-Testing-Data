// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

// Updated function:
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
    return `${hours - 12}:${minutes} pm`;
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

// Morning times
console.assert(formatAs12HourClock("01:00") === "01:00 am");
console.assert(formatAs12HourClock("11:59") === "11:59 am");

// Noon
console.assert(formatAs12HourClock("12:00") === "12:00 pm");
console.assert(formatAs12HourClock("12:30") === "12:30 pm");

// Afternoon / evening
console.assert(formatAs12HourClock("13:00") === "1:00 pm");
console.assert(formatAs12HourClock("18:45") === "6:45 pm");
console.assert(formatAs12HourClock("23:59") === "11:59 pm");

// Midnight
console.assert(formatAs12HourClock("00:00") === "12:00 am");
console.assert(formatAs12HourClock("00:15") === "12:15 am");
