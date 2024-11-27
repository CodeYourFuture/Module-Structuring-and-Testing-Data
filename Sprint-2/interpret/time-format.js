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
// 3 times (for hours, minutes, seconds)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// the value 0 for totalHours 

// c) What is the return value of pad is called for the first time?
// pad(0) is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// // 1 for remainingSeconds, which is the last argument passed to pad

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// // the return value of pad(1) ( which is the last time it call) is "01".
// explain: pasStart(2, "0") adds a leading zero to make it 2 characters.
