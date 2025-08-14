function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61)); // Expected output: "00:01:01"

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
//Answer: it is called 3 times once for each of the three calls to pad in the formatTimeDisplay function in line 11 return statement.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// Answer: The first call to pad is for totalHours which is 0. because 61 seconds is less than 3600 seconds (1 hour) the totalHours will be 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// Answer: The first call to pad will return "00" because it converts the number 0 to a string and pads it with leading zeros to ensure it is at least 2 characters long.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer: The last call to pad is for remainingSeconds which is 1. The value assigned to num will be 1 because it is the remaining seconds after calculating total hours and total minutes.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer: The last call to pad will return "01" because it converts the number 1 to a string and pads it with leading zeros to ensure it is at least 2 characters long.

