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


console.log(formatTimeDisplay(61  ));   

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// it will be called 3 times, because in the return statement we called it 3 times, once for hours, once for minutes and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// the value assigned to num is totalHours which is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// it is 00
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
  //The value assigned to num when pad is called for the last time is 1, because remainingSeconds = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//The return value of pad(1) is "01".
//That’s because inside pad, the number 1 becomes the string "1", and then padStart(2, "0") adds a leading zero to make it two digits.