function pad(num) {
  return num.toString().padStart(2, "0");
}

console.log(pad(5))

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// it is 0 because the is no remaining hours

// c) What is the return value of pad is called for the first time?
 // it is '00'

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//it is 1 because the remaining value of seconds is 1 and the function pad takes it as an argument


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// it is '01' because the padding length is 2. Num is converted into a string first before the padding is applied
