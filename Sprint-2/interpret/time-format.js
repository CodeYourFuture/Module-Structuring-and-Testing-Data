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
//	In the code, pad is called three times in formatTimeDisplay.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//the value of num in the first call to pad will be 0.

// c) What is the return value of pad is called for the first time?
// the return value for the first call to pad will be "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//the value of num in the last call to pad will be 1.because n the last call to pad, the value of num is 1. 
//This is because remainingSeconds is calculated as 61 % 60, which equals 1. When pad is called for remainingSeconds, it receives this value (1) as num.


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer.
//he return value is pad(1) returns "01" because padStart(2, "0") ensures it has two