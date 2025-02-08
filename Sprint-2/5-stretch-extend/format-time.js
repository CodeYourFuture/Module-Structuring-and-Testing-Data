// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  let minutes = time.slice(3, 5)
  if (hours > 12) {
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes} pm`;
  } else if (hours === 12){
  return `${hours}:${minutes} pm`
}else if (hours === 0){
  return `12:${minutes} am`

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

const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:30");
const targetOutput4 = "12:30 pm"
console.assert(
  currentOutput4 === targetOutput4, `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("16:30");
const targetOutput5 = "04:30 pm"
console.assert(
  currentOutput5 === targetOutput5, `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("20:08");
const targetOutput6 = "08:08 pm"
console.assert(
  currentOutput6 === targetOutput6, `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("07:07");
const targetOutput7 = "07:07 am"
console.assert(
  currentOutput7 === targetOutput7, `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClock("00:00");
const targetOutput8 = "12:00 am"
console.assert(
  currentOutput8 === targetOutput8, `current output: ${currentOutput8}, target output: ${targetOutput8}`
);