const calculation = 10 + 32;
const result = 40;
// console.assert(calculation === result);

function formatAs12HourClock() {}
console.log(formatAs12HourClock())
console.assert(formatAs12HourClock("08:00") === "08:00 am" , `current output: ${formatAs12HourClock("08:00")} , target output: 08:00 am`);
