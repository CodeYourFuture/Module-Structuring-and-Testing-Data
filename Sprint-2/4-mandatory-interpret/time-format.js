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
// pad will be called 3 times, once for each of totalHours, remainingMinutes, and remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61));

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num when pad is called for the first time is 0, which is the value of totalHours.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when called for the first time is "00", which is the string representation of totalHours padded to 2 digits.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time is 1, which is the value of remainingSeconds. This is because 61 seconds has 1 remaining second after accounting for the full minute.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value of pad when called for the last time is "01", which is the string representation of remainingSeconds padded to 2 digits.
