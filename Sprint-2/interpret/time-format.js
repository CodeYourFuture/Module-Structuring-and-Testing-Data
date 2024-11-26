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
/*
ANSWER: pad is called once for each component of the time (hours, minutes, and seconds).
 Therefore, it will be called 3 times.
*/

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
/*
ANSWER:  The first call to pad is with totalHours, which is 0.
So, num = 0.
*/


// c) What is the return value of pad is called for the first time?
/*
ANSWER:  Converts 0 to a string → "0".
Uses padStart(2, "0") to make it a 2-character string → "00".
Return value: "00".
*/

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
/*
ANSWER:   The last call to pad is with remainingSeconds, which is 1.
So, num = 1.
*/


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
/* 
ANSWER:   pad(1):

Converts 1 to a string → "1".
Uses padStart(2, "0") to make it a 2-character string → "01".
Return value: "01".
*/