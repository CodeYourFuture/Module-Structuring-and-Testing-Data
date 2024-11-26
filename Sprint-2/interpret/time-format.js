function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  console.log(
    `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`
  );
  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
formatTimeDisplay(61);
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// num = totalHours. the first value 0

// c) What is the return value of pad is called for the first time?
// 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// num = 1
/*
 The last time pad is remainingSeconds which calculated 61 % 60 = 1
 */

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// num = 1
/**
 * It converts 1 to a string and uses padStart(2, "0") to ensure it has two digits
 * The return value of pad in this last call is 01
 */
