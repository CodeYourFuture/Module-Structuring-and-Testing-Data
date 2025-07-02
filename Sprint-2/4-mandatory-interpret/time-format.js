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
// =============> pad is called 3 times — once for hours, once for minutes, and once for seconds.


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> pad is first called for total hourse which is 0 hours

// c) What is the return value of pad is called for the first time?
// =============> the return value is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> pad is called for total seconds at last time which is 1 seconds.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the return value is "01".It pads "1" with a leading zero to ensure two digits.


