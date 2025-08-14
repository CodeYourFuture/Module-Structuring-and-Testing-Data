// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const mins = Number(time.slice(3));
  if ( 24 > hours && hours > 12) {
    return `${hours - 12}:${mins} pm`;      
  } else if(hours === 00 || hours === 24) {     // Lines 9-10 added to tackle edge cases of when dealing with "00.00" or "24:00" as function inputs.
    return `12:${mins} am`;
  } else if (hours === 12) {
    return `12:${mins} pm`;
  } else {
  return `${hours}:${mins} am`;
}
}

const currentOutput0 = formatAs12HourClock("00.00");  // Lines 16-18, assertion test passed for the edge cases of "00.00" & "24:00" as a function input.
const targetOutput0 = "12:00 am";
console.assert(currentOutput0 === targetOutput0, `current output: ${currentOutput0}, target output: ${targetOutput0}`);


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

const currentOutput3 = formatAs12HourClock("00:59");
const targetOutput3 = "12:59 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:59");
const targetOutput4 = "12:59 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);


const currentOutput5 = formatAs12HourClock("23:59");
const targetOutput5 = "11:59 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);


console.log(formatAs12HourClock("24:00"));