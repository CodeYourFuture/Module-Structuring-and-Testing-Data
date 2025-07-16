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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// 3 times, once for each of hours, minutes, and seconds - pad(totalHours), pad(remainingMinutes), and pad(remainingSeconds).

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num when pad is called for the first time is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when called for the first time is "00", because it converts the number 0 to a string and pads it with leading zeros to ensure it has a length of at least 2 characters.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time in this program is 1. This is because the last call to pad is for remainingSeconds, which is calculated as 61 % 60, resulting in 1. The function then pads this value to ensure it has a length of at least 2 characters, resulting in "01".

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value assigned to num when pad is called for the last time in this program is "01". This is because the function converts the number 1 to a string and pads it with leading zeros to ensure it has a length of at least 2 characters, resulting in "01".
// This is the final output for the seconds part of the time format, which is displayed as part of the formatted time string.
