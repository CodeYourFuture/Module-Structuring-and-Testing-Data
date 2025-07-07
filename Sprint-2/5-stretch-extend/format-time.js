// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  // If hours is less than 12, it should be am
  const [hourStr, minute] = time.split(":");
  let hours = Number(hourStr);
  let suffix = "am";
  // If hours is 0, it should be 12 am
  if (hours === 0) {
    hours = 12;
  }
  // If hours is less than 12, it should be am
  else if (hours === 12) {
    suffix = "pm";
  }
  // If hours is greater than 12, it should be pm
  else if (hours > 12) {
    hours -= 12;
    suffix = "pm";
  }
  //return `${time} am`; ignoring the actual minutes
  const paddedHour = String(hours).padStart(2, "0");
  return `${paddedHour}:${minute} ${suffix}`;
}

// test 1
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
// test 2
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
// test3
const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
//test 4
const currentOutput4 = formatAs12HourClock("14:45");
const targetOutput4 = "02:45 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
// test 5
const currentOutput5 = formatAs12HourClock("01:00");
const targetOutput5 = "01:00 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);
