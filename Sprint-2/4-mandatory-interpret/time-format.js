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

// Calling the function with 61 as the argument
console.log(formatTimeDisplay(61)); 



// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The value is 0.

// c) What is the return value of pad is called for the first time?
// =============> The return value is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The value is 1 because 61 % 60 leaves 1 second remaining.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value is "01" because return num.toString().padStart(2, "0") formats 1 into "01".