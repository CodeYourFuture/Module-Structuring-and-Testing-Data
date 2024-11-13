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

formatTimeDisplay(61);

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// Answer: The function pad will be called three times, for totalHours,remainingMinutes and remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer: The value of num is 0 when pad is called for the first time.

// c) What is the return value of pad is called for the first time?
// Answer: The return value of pad when it is called for the first time is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: the value assigned to num during the last call to pad is 1 because remainingSeconds is calculated as 1
// This occurs because pad is used to format each component of the time individually, and remainingSeconds represents the seconds portion, which in this case is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: The return value of pad in the last call of the function is "01", because pad ensures that the seconds portion of the time display is always two digits, so "1" becomes "01"
