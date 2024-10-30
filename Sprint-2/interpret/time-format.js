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
console.log(`${formatTimeDisplay(61)}`);

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
//3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//0

// c) What is the return value of pad is called for the first time?
//00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//when pad is called for last time(pad(remainingSeconds)), it will ba called by the remainingSeconds value of 1, because in line 6
//has been mentioned that remainingSeconds=seconds % 60, so it will be remainder of 61/60(which is 1)

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//the return value is 01, because in line 2, padstart is using to make a string with 2 gigits
