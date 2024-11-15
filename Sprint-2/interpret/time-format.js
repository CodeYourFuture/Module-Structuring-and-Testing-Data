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
// it will be called three times in return for totalHours, remainingMinutes and remainingSeconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
 //it's 0
// c) What is the return value of pad is called for the first time?
// it's 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// it's 1 as the remainingSeconds = 1
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//the return value is 01, as.padStart(2, "0") provides that all numbers are formatted as 2 strings by adding a leading 0 when necessary.