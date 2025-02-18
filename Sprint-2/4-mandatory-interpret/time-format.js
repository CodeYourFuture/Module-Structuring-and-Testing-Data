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
console.log(formatTimeDisplay(61));
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Answer | The pad function is called three times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// Answer | The value assigned to num when pad is called for the first time (when formatTimeDisplay is called with an input of 61) is '0' and will display "00" as per padStart(2, "0")that will ensure the output contains two characters if required will pad at the start with "0".
// 
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// Answer | The return value is "00", as per pad()that will fill the output to two characters with zeros

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer | remainingSeconds = 61 % 60 = 1, it calculates how many seconds are left after converting seconds into minutes using modulo operator, 1 second left.


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer | 1 padded with a 0 due to padStart(2, "0"), number 1 will be padded with one 0 at the start =>01