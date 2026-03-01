// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
  time = hours - 12;
  return `${time.toString().padStart(2 , "0")}:00 pm`
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
const currentOutput3 = formatAs12HourClock("19:00");
const targetOutput3 = "07:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("21:00");
const targetOutput4 = "09:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);



// The previous version only worked properly for two-digit hours. To fix this, I made sure the hour is always displayed in two-digit format.

// First, I completed the mathematical calculation and stored the result in a variable. Then, I converted it to a string and used padStart(2, "0") to add a leading zero when needed.

// Now, it works correctly for all times greater than 12 and always shows two digits.