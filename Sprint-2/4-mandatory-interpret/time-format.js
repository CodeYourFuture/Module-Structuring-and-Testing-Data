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
// Pad will be called 3 times when formatTimeDisplay is called, once for each of the total hours, remaining minutes, and remaining seconds.
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// When pad is called for the first time, the value assigned to num is 0, which is the total hours calculated from the input of 61 seconds. This is because 61 seconds is equal to 1 minute and 1 second, which means there are 0 total hours in that time duration.
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when called for the first time is "00", because 0 padded to 2 digits is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// When pad is called for the last time, the value assigned to num is 1, which is the remaining seconds calculated from the input of 61 seconds. This is because 61 seconds is equal to 1 minute and 1 second, so there is 1 second remaining after accounting for the full minutes.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value assigned to num when pad is called for the last time in this program is "01", because 1 padded to 2 digits is "01".