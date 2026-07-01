function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
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
// =============> write your answer here: 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here:it is 0, because totalHours is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here:it is 00, because the function pad will add another 0 if it is less than 2 index.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here:it is 1, because the remainingSeconds value will become 1 after it get the remainder of the seconds.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here:it will be 01,because after going through the function pad it will gain 0 from the front because it is less
//                                       than 2 index so the return will be 01.
