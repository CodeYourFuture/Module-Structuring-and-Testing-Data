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

// [ChunYanWong] Find the bugs as follows
// Midnight Bug (00:xx): For "00:15", it returns "00:15 am" instead of "12:15 am".
// Noon Bug (12:xx): For "12:35", it hits the else block and returns "12:35 am" instead of "12:35 pm".
// Minutes are Hardcoded: For "16:45", it discards the actual minutes and hardcodes :00 pm, returning "3:00 pm".

//function formatAs12HourClock(time) {
  // Guard clause: handle invalid or empty inputs safely
//  if (!time || typeof time !== 'string' || !time.includes(':')) {
//    return "00:00 am";
//  }

//  const hours24 = Number(time.slice(0, 2));
//  const minutes = time.slice(3, 5); // Preserve actual minutes dynamic input
  
  // Determine am vs pm
//  const period = hours24 >= 12 ? "pm" : "am";
  
  // Convert hours to 12-hour format
//  let hours12 = hours24 % 12;
//  if (hours12 === 0) hours12 = 12; // Adjusts midnight (00) and noon (12) to 12
  
  // Format hours back into a 2-digit padded string
//  const paddedHours = String(hours12).padStart(2, "0");
  
//  return `${paddedHours}:${minutes} ${period}`;
//}
