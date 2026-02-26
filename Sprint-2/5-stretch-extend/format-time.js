// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
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

// Test of existing 
// Test of existing function
console.log("=== TESTING BUGGY FUNCTION ===");
console.log(formatAs12HourClock("00:00"), "→ Expected: 12:00 am ❌"); // Bug: midnight
console.log(formatAs12HourClock("12:00"), "→ Expected: 12:00 pm ❌"); // Bug: noon
console.log(formatAs12HourClock("14:30"), "→ Expected: 02:30 pm ❌"); // Bug: minutes lost
console.log(formatAs12HourClock("08:15"), "→ Expected: 08:15 am ❌"); // Bug: minutes lost
console.log(formatAs12HourClock("23:59"), "→ Expected: 11:59 pm ❌"); // Bug: minutes lost


// Fixed function to get result 

function formatAs12HourClockFixed(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
 
  if (hours === 0) return `12:${minutes} am`;      // Midnight
  if (hours === 12) return `12:${minutes} pm`;     // Noon
  if (hours > 12) {
    const h = (hours - 12).toString().padStart(2, "0");
    return `${h}:${minutes} pm`;
  }
  return `${time.slice(0, 5)} am`;
}

console.log("=== Test for fixed function ===\n");

console.log(formatAs12HourClockFixed("00:00"), "→ Expected: 12:00 am");
console.log(formatAs12HourClockFixed("00:30"), "→ Expected: 12:30 am");
console.log(formatAs12HourClockFixed("01:00"), "→ Expected: 01:00 am");
console.log(formatAs12HourClockFixed("08:15"), "→ Expected: 08:15 am");
console.log(formatAs12HourClockFixed("11:59"), "→ Expected: 11:59 am");
console.log(formatAs12HourClockFixed("12:00"), "→ Expected: 12:00 pm");
console.log(formatAs12HourClockFixed("12:30"), "→ Expected: 12:30 pm");
console.log(formatAs12HourClockFixed("13:00"), "→ Expected: 01:00 pm");
console.log(formatAs12HourClockFixed("14:45"), "→ Expected: 02:45 pm");
console.log(formatAs12HourClockFixed("23:59"), "→ Expected: 11:59 pm");
