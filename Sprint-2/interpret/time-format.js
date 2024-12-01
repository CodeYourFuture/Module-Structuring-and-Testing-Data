function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
console.log(totalHours);
  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}
let time=formatTimeDisplay(61);
console.log(time)
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?0

// c) What is the return value of pad is called for the first time?00

// d) What is  the value assigned to num when pad is called for the last time in this program?  Explain your answer
//second 1     The last call to pad is on remainingSeconds, which is 1 (since remainingSeconds = 61 % 60 = 1).
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//01When pad is called with num = 1, it will convert 1 to a string and then pad it to a width of 2 characters, so the return value is "01".