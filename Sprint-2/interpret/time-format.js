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
// three times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// 0 

// c) What is the return value of pad is called for the first time?
// 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The value is 1 because that is the value of the remainingSeconds variable. 

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The value is 01 because the pad(num) function adds a 0 in front if the number is only one digit. It makes sure the number has two digits. So, if the number is 1, it becomes 01.