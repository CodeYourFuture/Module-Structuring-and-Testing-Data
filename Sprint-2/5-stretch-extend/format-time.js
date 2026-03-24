// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

/*
edge cases to be checked:
1. 00:00
2. 24:00
3. 12:00
4. 12:01
5. 00:01
*/

function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3, 5));

  if (hours == 0 || hours == 24) {
    return `12:${pad(minutes)} am`;
  }
  if (hours > 12) {
    return `${pad(hours - 12)}:00 pm`;
  }
  if (hours == 12) {
    return `${time} pm`;
  }
  return `${time} am`;
}

let currentOutput = formatAs12HourClock("08:00");
let targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("23:00");
targetOutput = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("13:00");
targetOutput = "01:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("00:00");
targetOutput = "12:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("24:00");
targetOutput = "12:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("12:00");
targetOutput = "12:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("12:01");
targetOutput = "12:01 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("00:01");
targetOutput = "12:01 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
