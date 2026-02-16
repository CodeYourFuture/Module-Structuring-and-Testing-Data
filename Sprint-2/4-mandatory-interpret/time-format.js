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

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Pad will be called three times (for hours, minutes and seconds)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num for the first time that it is called is 0 (totalHours = 0)

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad for its first call is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value is 1, when formatTimeDisplay(61) runs: 61 seconds = 1 minute and 1 second
// remainingSeconds = 61 % 60 = 1
// The last call to pad is pad(remainingSeconds), so num receives 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value is "01" - pad converts the number to a string and ensures it has at least 2 digits using padStart(2, "0")
// Since "1" has only one digit, a leading zero is added so the value is then "01"
