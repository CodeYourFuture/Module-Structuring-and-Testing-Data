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

console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?

    //  pad will be called 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?

    //  0

// c) What is the return value of pad is called for the first time?

    //  '00'

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer

    //  1, when pad is called for the last time, the variable remainingSeconds is the argument. The value of remainingSeconds is derived from 'seconds % 60'. As seconds is 61, there is 1 remaining.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer

    // There is no return value assigned to num. There is however a return value assigned to pad, which is '01'