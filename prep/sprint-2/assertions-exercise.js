// const calculation = 10 + 32;
// const result = 40;
// console.assert(calculation === result);

// function formatAs12HourClock() {}
// console.log(formatAs12HourClock())
// console.assert(formatAs12HourClock("08:00") === "08:00 am" , `current output: ${formatAs12HourClock("08:00")} , target output: 08:00 am`);

function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput1 = formatAs12HourClock("23:00");
const targetOutput1 = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);