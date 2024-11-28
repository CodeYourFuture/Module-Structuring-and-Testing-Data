// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3, 5));
  if (minutes == 0){minutes = "00"}
  if (hours > 12) {
    let x = `${hours - 12}`.padStart(2,"0");
    return x+`:${minutes} pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("20:23");
const targetOutput = "08:23 pm";
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

// it doesnt work when the giving number is more than 12 and we minus it by 12 it will be one single number
// for example the output will be 8:00 pm but it must be 08:00 pm
// so when the we do the minus then we add a 0 to start o the number