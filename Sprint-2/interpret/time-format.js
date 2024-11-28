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


/* Answer
a, 3 times
b,totalHours wich is 0
c, "00"
d,The last value assigned to num is remainingSeconds, which is 1. Therefore, the value assigned to num is 1 on the last call.
e, The pad(1) returns "01" because 1 is padded to a two-character string, so the return value is "01"


*/
