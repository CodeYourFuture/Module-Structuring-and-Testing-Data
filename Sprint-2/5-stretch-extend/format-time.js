// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
function pad(num) {
  let numString = num.toString();
  if (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minute = time.slice(3,5);
  if (hours > 12) {
    return `${pad(hours - 12)}:${minute} pm`;
  } else if (hours == 12){
    return `12:${minute} pm`;
  } else if (hours == 00){
    return `12:${minute} am`;
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
  `2current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("23:59");
const targetOutput3 = "11:59 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("01:31");
const targetOutput4 = "01:31 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("00:00");
const targetOutput5 = "12:00 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("12:00");
const targetOutput6 = "12:00 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("15:25");
const targetOutput7 = "03:25 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClock("00:08");
const targetOutput8 = "12:08 am";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);

const currentOutput9 = formatAs12HourClock("08:35");
const targetOutput9 = "08:35 am";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`
);

const currentOutput10 = formatAs12HourClock("20:35");
const targetOutput10 = "08:35 pm";
console.assert(
  currentOutput10 === targetOutput10,
  `current output: ${currentOutput10}, target output: ${targetOutput10}`
);

const currentOutput11 = formatAs12HourClock("12:34");
const targetOutput11 = "12:34 pm";
console.assert(
  currentOutput11 === targetOutput11,
  `current output: ${currentOutput11}, target output: ${targetOutput11}`
);

const currentOutput12 = formatAs12HourClock("00:34");
const targetOutput12 = "12:34 am";
console.assert(
  currentOutput12 === targetOutput12,
  `current output: ${currentOutput12}, target output: ${targetOutput12}`
);
