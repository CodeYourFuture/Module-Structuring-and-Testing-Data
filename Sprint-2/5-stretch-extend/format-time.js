// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const [hourStr, minuteStr] = time.split(":");
  let hours = Number(hourStr);
  let suffix = "am";

  if (hours === 0) {
    hours = 12;
  } else if (hours === 12) {
    suffix = "pm";
  } else if (hours > 12) {
    hours -= 12;
    suffix = "pm";
  }

  const formattedHour = String(hours).padStart(2, "0");
  return `${formattedHour}:${minuteStr} ${suffix}`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.log(
  `The current time is 08:00 in 24-hour style, and this is ${targetOutput} in 12-hour style.`
);

console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.log(
  `The current time is 23:00 in 24-hour style, and this is ${targetOutput2} in 12-hour style.`
);
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.log(
  `The current time is 00:00 in 24-hour style, and this is ${targetOutput3} in 12-hour style.`
);
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("13:40");
const targetOutput4 = "01:40 pm";
console.log(
  `The current time is 13:40 in 24-hour style, and this is ${targetOutput4} in 12-hour style.`
);
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("22:15");
const targetOutput5 = "10:15 pm";
console.log(
  `The current time is 22:15 in 24-hour style, and this is ${targetOutput5} in 12-hour style.`
);
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);
