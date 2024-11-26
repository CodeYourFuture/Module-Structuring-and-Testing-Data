function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  
  // Handle edge cases for 12:00
  if (hours === 0) {
    return `12:${minutes} am`;  // Midnight case "00:00" -> "12:00 am"
  }
  
  if (hours === 12) {
    return `12:${minutes} pm`;  // Noon case "12:00" -> "12:00 pm"
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;  // PM case (e.g., "13:00" -> "1:00 pm")
  }

  return `${time} am`;  // AM case (e.g., "08:00" -> "8:00 am")
}

// Test cases
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
const targetOutput3 = "12:00 am";  // Midnight case
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";  // Noon case
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("15:30");
const targetOutput5 = "3:30 pm";  // PM case
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("11:59");
const targetOutput6 = "11:59 am";  // Just before noon
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("23:59");
const targetOutput7 = "11:59 pm";  // Just before midnight
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);