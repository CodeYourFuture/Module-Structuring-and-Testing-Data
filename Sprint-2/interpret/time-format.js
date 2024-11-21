function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}
/* I have improve the time function according to mentor's feedback
function pad(num) {
  return num.toString().padStart(2, "0");
}

function validateTimeFormat(time) {
  // Check if the input is in the format HH:MM:SS
  const timePattern = /^([0-9]{1,2}):([0-9]{2}):([0-9]{2})$/;
  const match = time.match(timePattern);

  if (!match) {
    return false; // Invalid format
  }

  // Extract hours, minutes, and seconds from the match
  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const seconds = parseInt(match[3], 10);

  // Validate if minutes and seconds are within valid range
  if (minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    return false; // Invalid time value
  }

  return true; // Valid time format and values
}

function formatTimeDisplay(seconds) {
  // Validate if the seconds argument is a positive integer
  if (isNaN(seconds) || seconds < 0) {
    return 'Invalid time input';
  }

  const remainingSeconds = seconds % 60; // Get the remaining seconds
  const totalMinutes = Math.floor(seconds / 60); // Total minutes from the seconds
  const remainingMinutes = totalMinutes % 60; // Get the remaining minutes after calculating total minutes
  const totalHours = Math.floor(totalMinutes / 60); // Get total hours from the minutes

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// Example usage:
console.log(formatTimeDisplay(3661)); // "01:01:01"
console.log(formatTimeDisplay(59));   // "00:00:59"
console.log(formatTimeDisplay(3600)); // "01:00:00"
console.log(formatTimeDisplay(86400)); // "24:00:00"

// Check if the time is valid (testing against "45:90")
const time = "45:90";
if (validateTimeFormat(time)) {
  console.log(`The time "${time}" is valid.`);
} else {
  console.log(`The time "${time}" is invalid.`);
}*/


// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called? 
//Answer: pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//Answer: The value assigned to num the first time pad is called is 0.

// c) What is the return value of pad is called for the first time?
//Answer: The return value of the first call to pad is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//Answer: The value assigned to num when pad is called for the last time is 1 because it formats the remainingSeconds (which is 1).

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//Answer: The return value of the last call to pad(1) is "01" because the number 1 is padded to a 2-digit string.

