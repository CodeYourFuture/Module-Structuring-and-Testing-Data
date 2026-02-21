// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// BUG 1: Minutes are ignored for PM times.
// The function always returns ":00" for PM outputs instead of using the real minutes.
// Example: "23:45" → "11:00 pm" (minutes lost).

// BUG 2: Leading zeros are not removed for AM times.
// The function keeps the original hour string, so leading zeros remain.
// Example: "08:00" → "08:00 am" instead of "8:00 am".

// BUG 3: Midnight (00:00–00:59) is handled incorrectly.
// The function treats "00" as a normal hour and labels it as AM without converting to 12.
// Example: "00:30" → "00:30 am" instead of "12:30 am".

// BUG 4: Noon (12:00–12:59) is labelled incorrectly.
// The function returns "am" for 12:xx even though noon should be "pm".
// Example: "12:00" → "12:00 am" instead of "12:00 pm".

// BUG 5: AM times are returned unchanged.
// The function simply appends "am" without converting the hour format.
// Example: "09:05" → "09:05 am" instead of "9:05 am".

// BUG 6: Minutes are not padded when needed.
// If minutes are a single digit, the output would drop the leading zero.
// Example: "13:05" → "1:5 pm" instead of "1:05 pm".

// BUG 7: The function only checks hours > 12.
// It fails to correctly handle the special cases of 12 (noon) and 0 (midnight).
// Example: "12:45" → "12:45 am" and "00:10" → "00:10 am".

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

// BUG 1: Minutes are ignored for PM times.
console.assert(
  formatAs12HourClock("23:45") === "11:45 pm",
  "BUG 1: PM minutes are ignored"
);

// BUG 2: Leading zeros are not removed for AM times.
console.assert( 
  formatAs12HourClock("08:00") === "8:00 am", 
  "BUG 2: Leading zero not removed for AM times" 
);

// BUG 3: Midnight is handled incorrectly.
console.assert(
  formatAs12HourClock("00:30") === "12:30 am",
  "BUG 3: Midnight incorrectly formatted"
);

// BUG 4: Noon is labelled incorrectly.
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  "BUG 4: Noon incorrectly labelled as am"
);

// BUG 5: AM times returned unchanged.
console.assert(
  formatAs12HourClock("09:05") === "9:05 am",
  "BUG 5: AM hour not converted from 09 to 9"
);

// BUG 6: Minutes not padded.
console.assert(
  formatAs12HourClock("13:05") === "1:05 pm",
  "BUG 6: Minutes not padded with leading zero"
);

// BUG 7: Only checks hours > 12 (fails for 12 and 0)
console.assert(
  formatAs12HourClock("12:45") === "12:45 pm",
  "BUG 7: Noon minutes incorrectly labelled"
);

console.assert(
  formatAs12HourClock("00:10") === "12:10 am",
  "BUG 7: Midnight minutes incorrectly formatted"
);

// Correct code:
// Takes a time string in 24‑hour format ("HH:MM") and returns the same time 
// converted into a correctly formatted 12‑hour clock string with an "am"/"pm" suffix.
function formatAs12HourClockFixed(time) {
  // Split the "HH:MM" string into two parts and convert both to numbers
  let [hours, minutes] = time.split(":").map(Number);
  // Decide whether the time is AM or PM based on the 24‑hour hour value
  const suffix = hours >= 12 ? "pm" : "am";
  // Convert 24‑hour format to 12‑hour format using modulo 
  // 13 → 1, 14 → 2, etc.
  let displayHour = hours % 12;
  // Handle the special case where modulo gives 0 (midnight or noon) 
  // 0 → 12, 12 → 12
  if (displayHour === 0) displayHour = 12;
  // Ensure minutes always have two digits (e.g., "5" → "05")
  const minuteStr = minutes.toString().padStart(2, "0");
  // Build the final formatted string using template literals
  return `${displayHour}:${minuteStr} ${suffix}`;
}

// Tests for the fixed version of the function
// These assertions confirm that all proviously identified bugs
// have been resolved and that the function now handles minutes,
// AM/PM logic, midnight, noon, leading zeros and padding correctly
console.assert(formatAs12HourClockFixed("23:45") === "11:45 pm", "Fixed PM minutes");
console.assert(formatAs12HourClockFixed("00:30") === "12:30 am", "Fixed midnight");
console.assert(formatAs12HourClockFixed("12:00") === "12:00 pm", "Fixed noon");
console.assert(formatAs12HourClockFixed("09:05") === "9:05 am", "Fixed AM leading zero");
console.assert(formatAs12HourClockFixed("13:05") === "1:05 pm", "Fixed minute padding");

// Manual output checks for the fixed function
// These logs allow you to visually confirm the final formatted results
// in addition to the automated tests above
console.log(formatAs12HourClockFixed("23:45"));
console.log(formatAs12HourClockFixed("00:30"));
console.log(formatAs12HourClockFixed("12:00"));
console.log(formatAs12HourClockFixed("09:05"));
console.log(formatAs12HourClockFixed("13:05"));