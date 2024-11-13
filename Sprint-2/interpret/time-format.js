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
// pad is called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// The value assigned to num when pad is called for the first time is 0.

// c) What is the return value of pad is called for the first time?
// The return value of pad when called for the first time is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The value assigned to num when pad is called for the last time is 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The return value when pad is called for the last time is "01". This is because pad converts 1 to a two-digit string with a leading zero, resulting in "01".
