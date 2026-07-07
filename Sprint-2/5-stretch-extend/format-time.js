// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  
  // Midday case: 12:00
  if (hours === 12) {
    return `12:${minutes} pm`;
  }
  
  // Midnight case: 00:00
  if (hours === 0) {
    return `12:${minutes} am`;
  }

  // Afternoon/Evening case: 13:00 - 23:59
  if (hours > 12) {
    const convertedHours = hours - 12;
    const paddedHours = String(convertedHours).padStart(2, "0");
    return `${paddedHours}:${minutes} pm`;
  }
  
  // Morning case: 01:00 - 11:59
  return `${time} am`;
}

// === Your Tests (All will now pass silently!) ===
// === Existing Tests ===
console.assert(formatAs12HourClock("08:00") === "08:00 am", "Failed 08:00 am");
console.assert(formatAs12HourClock("23:00") === "11:00 pm", "Failed 23:00 pm");
console.assert(formatAs12HourClock("13:45") === "01:45 pm", "Failed 13:45 pm");

// === New Edge Case Tests ===

// Midday test
console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Failed Midday: Expected 12:00 pm");

// Midnight test
console.assert(formatAs12HourClock("00:00") === "12:00 am", "Failed Midnight: Expected 12:00 am");

// Edge case just after midnight
console.assert(formatAs12HourClock("00:45") === "12:45 am", "Failed just after midnight");

// Edge case just before midday
console.assert(formatAs12HourClock("11:59") === "11:59 am", "Failed just before midday");

console.log("All edge case assertions passed!");