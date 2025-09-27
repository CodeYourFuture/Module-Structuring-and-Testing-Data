// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  if (hours >= 12) {
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

// Midnight
const outMidnight = formatAs12HourClock("00:00");
const targetMidnight = "00:00 am";
console.assert(
  outMidnight === targetMidnight,
  `current output: ${outMidnight}, target output: ${targetMidnight}`
);

// Noon
const outNoon = formatAs12HourClock("12:00");
const targetNoon = "12:00 pm";
console.assert(
  outNoon === targetNoon,
  `current output: ${outNoon}, target output: ${targetNoon}`
);

// 1 PM
const out13 = formatAs12HourClock("13:00");
const target13 = "1:00 pm";
console.assert(
  out13 === target13,
  `current output: ${out13}, target output: ${target13}`
);

// 12:59 PM
const out1259 = formatAs12HourClock("12:59");
const target1259 = "12:59 pm";
console.assert(
  out1259 === target1259,
  `current output: ${out1259}, target output: ${target1259}`
);

// 11:59 PM
const out2359 = formatAs12HourClock("23:59");
const target2359 = "11:59 pm";
console.assert(
  out2359 === target2359,
  `current output: ${out2359}, target output: ${target2359}`
);

// 01:00 AM
const out1 = formatAs12HourClock("01:00");
const target1 = "01:00 am";
console.assert(
  out1 === target1,
  `current output: ${out1}, target output: ${target1}`
);

// 10:30 AM
const out1030 = formatAs12HourClock("10:30");
const target1030 = "10:30 am";
console.assert(
  out1030 === target1030,
  `current output: ${out1030}, target output: ${target1030}`
);

// 15:45 PM
const out1545 = formatAs12HourClock("15:45");
const target1545 = "3:45 pm";
console.assert(
  out1545 === target1545,
  `current output: ${out1545}, target output: ${target1545}`
);

// Edge: single digit hour
const outSingle = formatAs12HourClock("7:00");
const targetSingle = "7:00 am";
console.assert(
  outSingle === targetSingle,
  `current output: ${outSingle}, target output: ${targetSingle}`
);
