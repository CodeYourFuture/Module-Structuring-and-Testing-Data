function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
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
// =============> Pad will be called 3 times, once for totalHours, once for remainingMinutes, and once for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The value will be 0 

// c) What is the return value of pad is called for the first time?
// =============> The return value will be "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The value assigned to num when pad is called for the last time in this program will be 1.Because it is the value of the remainingSeconds variable, which is calculated as 61 % 60 = 1. 

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> The output is "01" because the pad function adds a leading zero to the number 1, resulting in a two-character string "01".
