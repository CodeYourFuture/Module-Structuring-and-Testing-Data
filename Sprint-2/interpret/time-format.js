function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?

// c) What is the return value of pad is called for the first time?

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer

/*  ANSWERS

(a) The function pad is called 3 times when you use formatTimeDisplay with 61 seconds.

(b) The value of num when pad is called for the first time is 0.

(c) The value returned by pad when it is called for the first time is "00".

(d) The value of num when pad is called for the last time is 1.

(e) The value returned by pad when it is called for the last time is "01". */