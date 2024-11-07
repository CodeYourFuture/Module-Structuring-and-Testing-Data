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
//Answer: pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//Answer: The value assigned to num the first time pad is called is 0.

// c) What is the return value of pad is called for the first time?
//Answer: The return value of the first call to pad is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//Answer: The value assigned to num when pad is called for the last time is 1 because it formats the remainingSeconds (which is 1).

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//Answer: The return value of the last call to pad(1) is "01" because the number 1 is padded to a 2-digit string.

