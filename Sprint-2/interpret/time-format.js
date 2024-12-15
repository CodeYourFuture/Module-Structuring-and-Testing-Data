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

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
      // 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
      // the num value for first time is 0

// c) What is the return value of pad is called for the first time?
      // it's 00 because of .padStart()

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
      // the num value for last time is 1 . it refers to remainingSeconds which is 1 here --> 61 % 60 = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
      // it's 01 . it was 1 ,but .padStart() turns it into 01 by adding one 0 to start of it.