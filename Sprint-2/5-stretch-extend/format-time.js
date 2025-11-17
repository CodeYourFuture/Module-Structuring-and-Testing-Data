// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours24 = Number(time.slice(0, 2));
  const minutes = time.slice(3).padStart(2, "0");
  const timeSuffix = hours24 >= 12 ? "pm" : "am";

  let hours12 = hours24 % 12;
  if (hours12 === 0) hours12 = 12;

  const formattedHours12 = String(hours12).padStart(2, "0");

  return `${formattedHours12}:${minutes} ${timeSuffix}`;
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

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("19:12");
const targetOutput5 = "07:12 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// I found that when I added minutes, the output became incorrect because the original function only changed the hours. I fixed this bug by introducing a new variable called minutes and using it as the second part of the output after the hours. I also added some formatting for the minutes and defined the period of time (am/pm) in a variable called timeSuffix to make the output display correctly.
