// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  if (hours === 0) {
    // Midnight case
    return `12:${minutes} am`;
  } else if (hours === 12) {
    // Noon case
    return `12:${minutes} pm`;
  } else if (hours > 12) {
    // Afternoon to evening (1 pm to 11 pm)
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
  } else {
    // Morning (1 am to 11 am)
    return `${String(hours).padStart(2, "0")}:${minutes} am`;
  }
}
// function formatAs12HourClock(time){
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }
// function myTest(mytime){
// const currentOutput = formatAs12HourClock(mytime);
// const targetOutput = mytime;
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`
// );
// }
// myTest("8:00 am")

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );


const currentOutput1 = formatAs12HourClock("08:00");
console.log("currentOutput1:",currentOutput1)
const targetOutput1 = "08:00 am";
console.log("targetOutput1:",targetOutput1)
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
);


const currentOutput2 = formatAs12HourClock("23:00");
console.log("currentOutput2:",currentOutput2)
const targetOutput2 = "11:00 pm";
console.log("targetOutput2:",targetOutput2)
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
console.log("currentOutput3:",currentOutput3)
const targetOutput3 = "12:00 am";
console.log("targetOutput3:",targetOutput3)
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
console.log("currentOutput4:",currentOutput4)
const targetOutput4 = "12:00 pm";
console.log("targetOutput4:",targetOutput4)
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("13:15");
console.log("currentOutput5:",currentOutput5)
const targetOutput5 = "01:15 pm";
console.log("targetOutput5:",targetOutput5)
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("01:45");
console.log("currentOutput6:",currentOutput6)
const targetOutput6 = "01:45 am";
console.log("targetOutput6:",targetOutput6)
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("15:00");
console.log("currentOutput7:",currentOutput7)
const targetOutput7 = "03:00 pm";
console.log("targetOutput7:",targetOutput7)
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

