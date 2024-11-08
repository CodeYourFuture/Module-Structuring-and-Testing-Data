// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

function formatAs12HourClock(time) {
  let [hours, minutes] = time.split(':').map(Number);
  let timeFormat = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${timeFormat}`;
}

const currentOutput = formatAs12HourClock("17:00");
const targetOutput = "05:00 pm";

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

