// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
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


//Answer : (my tests)

//test case for midnight and noon:
const currentOutput4 = formatAs12HourClock("00:00")
const targetOutput4 = "12:00 am"
console.assert(
  currentOutput4===targetOutput4,
  `curret output: ${currentOutput4}, target output: ${targetOutput4}`
)
const currentOutput3 = formatAs12HourClock("12:00")//12
const targetOutput3 = "12:00 pm"
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
)

//Test cases for times just before transitions

const currentOutput5= formatAs12HourClock("12:59")
const targetOutput5 = "12:59 pm"
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
)