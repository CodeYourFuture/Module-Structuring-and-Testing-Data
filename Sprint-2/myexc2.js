/*function formatAs12HourClock() {}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);*/


/*function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("09:00");
const targetOutput = "09:00 am";

console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);*/

function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";

console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

function formatAs12HourClock(time2) {
  return `${time} pm`;
}

const currentOutput = formatAs12HourClock("23:00");
const targetOutput = "11:00 pm";

console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

