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
// =============> 3
//
// Call formatTimeDisplay with an input of 61, now answer the following:
//
// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1. When num is called for the last time it takes on the value of remainingSeconds and to calculate remaining seconds we use 61%60 which is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 01. since the value assigned to num is 1 it is then turned into a string by the function pad and the pad function also ensures that the string is two digits long
