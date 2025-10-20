function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds =  seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> Three time

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> num =0

// c) What is the return value of pad is called for the first time?
// =============> return value='00'

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> num=1 because it will take the value of remainingseconda which is 1;

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> return value ='01' it will take number 1 then will convert to sting then it will add 0 to the first because it is only one character .
