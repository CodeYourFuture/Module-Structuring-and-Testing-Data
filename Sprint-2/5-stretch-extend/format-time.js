// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(3, 5);

  if (Number(hours) > 12) {
    let timeHour = Number(hours) - 12;
    if (timeHour.toString().length !== 2) {
      timeHour = timeHour.toString().padStart(2, "0");
    }
    return `${timeHour}:${minutes} pm`;
  } else if (Number(hours) === 0) {
    return `12:${minutes} am`;
  } else if (Number(hours) === 12) {
    return `12:${minutes} pm`;
  }
  return `${hours}:${minutes} am`;
}

//Test cases
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

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput5 = formatAs12HourClock("15:01");
const targetOutput5 = "03:01 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("13:00");
const targetOutput6 = "01:00 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("12:00");
const targetOutput7 = "12:00 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClock("12:30");
const targetOutput8 = "12:30 pm";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);

const currentOutput9 = formatAs12HourClock("11:59");
const targetOutput9 = "11:59 am";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`
);

const currentOutput10 = formatAs12HourClock("12:01");
const targetOutput10 = "12:01 pm";
console.assert(
  currentOutput10 === targetOutput10,
  `current output: ${currentOutput10}, target output: ${targetOutput10}`
);

const currentOutput11 = formatAs12HourClock("00:45");
const targetOutput11 = "12:45 am";
console.assert(
  currentOutput11 === targetOutput11,
  `current output: ${currentOutput11}, target output: ${targetOutput11}`
);