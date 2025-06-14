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
// 3 times > write your answer here

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// "0"> write your answer here

// c) What is the return value of pad is called for the first time?
// "00"> write your answer here

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The value is "1" sins the last argument passed to pad is remainingSeconds" > write your answer here

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The last return number value will be "01",sins the pad (1) will convert the 1 to string "0" then add "0" to the num value <write your answer here
